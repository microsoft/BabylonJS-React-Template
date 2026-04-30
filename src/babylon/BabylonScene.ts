// Deep imports — pulls only the Babylon submodules we actually use, so the
// bundler can tree-shake everything else out of @babylonjs/core.
import { Engine } from "@babylonjs/core/Engines/engine";
import { Scene } from "@babylonjs/core/scene";
import { Color3 } from "@babylonjs/core/Maths/math.color";
import { Vector3 } from "@babylonjs/core/Maths/math.vector";
import { ArcRotateCamera } from "@babylonjs/core/Cameras/arcRotateCamera";
import { HemisphericLight } from "@babylonjs/core/Lights/hemisphericLight";
import { GizmoManager } from "@babylonjs/core/Gizmos/gizmoManager";
import { Mesh } from "@babylonjs/core/Meshes/mesh";
import { CreateBox } from "@babylonjs/core/Meshes/Builders/boxBuilder";
import { Texture } from "@babylonjs/core/Materials/Textures/texture";
import { ImportMeshAsync } from "@babylonjs/core/Loading/sceneLoader";
import type { AbstractMesh } from "@babylonjs/core/Meshes/abstractMesh";
import type { StandardMaterial } from "@babylonjs/core/Materials/standardMaterial";

// Side-effect: registers the .babylon file loader plugin used by ImportMeshAsync.
import "@babylonjs/core/Loading/Plugins/babylonFileLoader";

import blocLightmapImg from "./models/CornellBox/bloc.000.lightmap.jpg";
import cornellLightmapImg from "./models/CornellBox/cornellBox.000.lightmap.jpg";
import suzanneLightmapImg from "./models/CornellBox/suzanne.000.lightmap.jpg";
import cornellBoxModel from "./models/CornellBox/cornellBox.babylon";

const DEG2RAD = Math.PI / 180;

export class BabylonScene {
    public readonly engine: Engine;
    public readonly scene: Scene;
    public readonly gizmoManager: GizmoManager;
    public readonly camera: ArcRotateCamera;
    public readonly lights: { hemispheric: HemisphericLight };

    private readonly resizeListener: () => void;

    constructor(canvas: HTMLCanvasElement) {
        this.engine = new Engine(canvas);

        this.scene = new Scene(this.engine);
        this.scene.ambientColor = new Color3(0.8, 0.8, 0.8);

        this.gizmoManager = new GizmoManager(this.scene);
        this.gizmoManager.positionGizmoEnabled = true;

        this.camera = this.createCamera(canvas, new Vector3(0, 1.7, 0));
        this.lights = this.createLights();

        void this.importSceneModels();

        this.resizeListener = () => this.engine.resize();
        window.addEventListener("resize", this.resizeListener);

        this.engine.runRenderLoop(() => {
            this.scene.render();
        });
    }

    /**
     * Tear down GPU resources, the render loop, and the resize listener.
     * Call from React's useEffect cleanup.
     */
    public dispose(): void {
        window.removeEventListener("resize", this.resizeListener);
        this.engine.stopRenderLoop();
        this.scene.dispose();
        this.engine.dispose();
    }

    /**
     * Lazy-loads the Babylon Inspector on demand. The Inspector bundle is
     * several megabytes, so it must NEVER be imported at module load time.
     */
    public async showInspector(): Promise<void> {
        await import("@babylonjs/core/Debug/debugLayer");
        await import("@babylonjs/inspector");
        await this.scene.debugLayer.show();
    }

    private createCamera(
        _canvas: HTMLCanvasElement,
        cameraTarget: Vector3
    ): ArcRotateCamera {
        // https://doc.babylonjs.com/features/featuresDeepDive/cameras/camera_introduction#arc-rotate-camera
        const camera = new ArcRotateCamera(
            "Main Camera",
            -90 * DEG2RAD, // alpha (longitude)
            87 * DEG2RAD, // beta (latitude)
            7, // radius
            cameraTarget,
            this.scene
        );

        camera.minZ = 0;
        camera.maxZ = 20;

        camera.lowerBetaLimit = 1 * DEG2RAD;
        camera.upperBetaLimit = 89 * DEG2RAD;

        camera.lowerRadiusLimit = 1;
        camera.upperRadiusLimit = 100;

        camera.panningSensibility = 0;
        camera.inertia = 0.9;
        camera.wheelPrecision = 100;
        camera.mapPanning = true;
        camera.zoomOnFactor = 1.0;

        // v9 attachControl: (noPreventDefault?, useCtrlForPanning?, panningMouseButton?)
        camera.attachControl(true, false, 0);
        return camera;
    }

    private createLights(): { hemispheric: HemisphericLight } {
        const hemiLight = new HemisphericLight(
            "Hemi",
            new Vector3(0, 1, 0),
            this.scene
        );
        hemiLight.intensity = 2;
        return { hemispheric: hemiLight };
    }

    /**
     * Optional skybox helper retained as a reference. Not invoked by default.
     * Dynamically imports SkyMaterial so the @babylonjs/materials bundle
     * stays out of the main chunk unless this method is actually called.
     */
    public async createSkybox(): Promise<Mesh> {
        const { SkyMaterial } = await import("@babylonjs/materials/sky");

        const box = CreateBox(
            "SkyBox",
            { size: 10000, sideOrientation: Mesh.BACKSIDE },
            this.scene
        );
        box.isPickable = false;
        box.infiniteDistance = true;

        const skyMaterial = new SkyMaterial("Sky", this.scene);
        skyMaterial.backFaceCulling = false;
        skyMaterial.inclination = -0.28;
        skyMaterial.azimuth = 0.666;
        skyMaterial.turbidity = 6;
        skyMaterial.luminance = 0.9;
        skyMaterial.rayleigh = 1;
        box.material = skyMaterial;

        return box;
    }

    private async importSceneModels(): Promise<void> {
        const applyLightmap = (
            material: StandardMaterial,
            lightmapImg: string
        ): void => {
            const lightmap = new Texture(lightmapImg, this.scene);
            material.diffuseColor = Color3.Black();
            material.lightmapTexture = lightmap;
            material.lightmapTexture.coordinatesIndex = 1;
            material.useLightmapAsShadowmap = true;
        };

        // Babylon 7+ replaced SceneLoader.ImportMesh with the promise-based ImportMeshAsync.
        await ImportMeshAsync(cornellBoxModel, this.scene);

        const bloc = this.scene.getMeshByName("bloc.000") as AbstractMesh | null;
        const suzanne = this.scene.getMeshByName(
            "suzanne.000"
        ) as AbstractMesh | null;
        const cornell = this.scene.getMeshByName(
            "cornellBox.000"
        ) as AbstractMesh | null;

        if (bloc?.material) {
            applyLightmap(bloc.material as StandardMaterial, blocLightmapImg);
        }
        if (suzanne?.material) {
            applyLightmap(
                suzanne.material as StandardMaterial,
                suzanneLightmapImg
            );
        }
        if (cornell?.material && "subMaterials" in cornell.material) {
            const multi = cornell.material as unknown as {
                subMaterials: StandardMaterial[];
            };
            multi.subMaterials.forEach((material) =>
                applyLightmap(material, cornellLightmapImg)
            );
        }
    }
}
