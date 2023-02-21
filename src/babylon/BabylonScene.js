import * as BABYLON from "@babylonjs/core";
import { SkyMaterial } from "@babylonjs/materials/sky";
import "@babylonjs/loaders/glTF";
import "@babylonjs/inspector";

import blocLightmapImg from "./models/CornellBox/bloc.000.lightmap.jpg";
import cornellLightmapImg from "./models/CornellBox/cornellBox.000.lightmap.jpg";
import suzanneLightmapImg from "./models/CornellBox/suzanne.000.lightmap.jpg";
import cornellBoxModel from "./models/CornellBox/cornellBox.babylon";

const DEG2RAD = Math.PI / 180;

export class BabylonScene {
    constructor(canvas) {
        const engine = new BABYLON.Engine(canvas);

        this.scene = new BABYLON.Scene(engine);
        this.scene.ambientColor = new BABYLON.Color3(0.8, 0.8, 0.8);

        this.gizmoManager = new BABYLON.GizmoManager(this.scene);
        this.gizmoManager.positionGizmoEnabled = true;

        this.camera = this.createCamera(canvas, new BABYLON.Vector3(0, 1.7, 0));
        this.lights = this.createLights();

        this.importSceneModels();

        // this.scene.debugLayer.show();

        // run the main render loop
        engine.runRenderLoop(() => {
            this.scene.render();
        });
    }

    createCamera(canvas, cameraTarget) {
        // https://doc.babylonjs.com/features/featuresDeepDive/cameras/camera_introduction#arc-rotate-camera
        const camera = new BABYLON.ArcRotateCamera(
            "Main Camera",
            -90 * DEG2RAD,      // "alpha", longitude i.e horizontal rotation around a sphere
            87 * DEG2RAD,       // "beta", latitude, i.e vertical rotation around a sphere
            7,                  // "radius", distance from target i.e sphere radius
            cameraTarget,
            this.scene
        );

        camera.minZ = 0;
        camera.maxZ = 20;

        camera.lowerBetaLimit = 1 * DEG2RAD;    // This prevents the camera from rotating past the horizon (i.e the floor)
        camera.upperBetaLimit = 89 * DEG2RAD;

        camera.lowerRadiusLimit = 1;            // Min zoom level
        camera.upperRadiusLimit = 100;          // Max zoom level

        camera.panningSensibility = 0;          // Disable panning
        camera.inertia = 0.9;
        camera.wheelPrecision = 100;
        camera.mapPanning = true;
        camera.zoomOnFactor = 1.0;

        camera.attachControl(canvas, true, false, 0);
    }

    createLights() {
        const hemiLight = new BABYLON.HemisphericLight("Hemi", new BABYLON.Vector3(0, 1, 0), this.scene);
        hemiLight.intensity = 2;
        return { hemispheric: hemiLight }
    }

    createSkybox() {
        const box = BABYLON.Mesh.CreateBox(
            "SkyBox",
            10000,
            this.scene,
            false,
            BABYLON.Mesh.BACKSIDE
        );
        box.isPickable = false;
        box.infiniteDistance = true;
        box.material = new SkyMaterial("Sky", this.scene);
        box.material.backFaceCulling = false;
        box.material.inclination = -0.28;
        box.material.azimuth = 0.666;
        box.material.turbidity = 6;
        box.material.luminance = 0.9;
        box.material.rayleigh = 1;

        return box;
    }

    createShadowGenerator() {
        // Shadows
        const shadowGenerator = new BABYLON.CascadedShadowGenerator(1024, this.lights.sun);
        shadowGenerator.numCascades = 3;
        shadowGenerator.shadowMaxZ = 800;

        this.scene.meshes.forEach(mesh => {
            shadowGenerator.getShadowMap().renderList.push(mesh);
        });
    }

    importSceneModels() {
        const applyLightmap = (material, lightmapImg) => {
            const lightmap = new BABYLON.Texture(lightmapImg, this.scene);
            material.diffuseColor = BABYLON.Color3.Black();
            material.lightmapTexture = lightmap;
            material.lightmapTexture.coordinatesIndex = 1;
            material.useLightmapAsShadowmap = true;
        }

        const onLoad = (meshes) => {
            const bloc = this.scene.getMeshByName("bloc.000");
            const suzanne = this.scene.getMeshByName("suzanne.000");
            const cornell = this.scene.getMeshByName("cornellBox.000");

            applyLightmap(bloc.material, blocLightmapImg);
            applyLightmap(suzanne.material, suzanneLightmapImg);

            cornell.material.subMaterials.forEach(material => {
                applyLightmap(material, cornellLightmapImg);
            });
        }
        BABYLON.SceneLoader.ImportMesh("", cornellBoxModel, "", this.scene, onLoad);
    }
}