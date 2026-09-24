import { useEffect, useRef } from "react";
import {
    Cartesian3,
    createOsmBuildingsAsync,
    createWorldTerrainAsync,
    Ion,
    Math as CesiumMath,
    Viewer,
} from "cesium";

import "cesium/Build/Cesium/Widgets/widgets.css";
import styles from "./CesiumCanvas.module.css";

/**
 * Cesium Ion access token. Without this you won't see terrain or OSM data.
 * Obtain one at https://ion.cesium.com/.
 */
Ion.defaultAccessToken = "";

/**
 * Hosts a Cesium Viewer.
 */
const CesiumCanvas = () => {
    const divRef = useRef<HTMLDivElement>(null);
    const cesiumViewer = useRef<Viewer | null>(null);

    useEffect(() => {
        if (!Ion.defaultAccessToken || !divRef.current || cesiumViewer.current) {
            return;
        }

        let cancelled = false;

        (async () => {
            const terrainProvider = await createWorldTerrainAsync();
            if (cancelled || !divRef.current) return;

            const viewer = new Viewer(divRef.current, { terrainProvider });
            cesiumViewer.current = viewer;

            const buildings = await createOsmBuildingsAsync();
            if (cancelled) {
                viewer.destroy();
                cesiumViewer.current = null;
                return;
            }
            viewer.scene.primitives.add(buildings);

            viewer.camera.flyTo({
                destination: Cartesian3.fromDegrees(-122.4175, 37.655, 400),
                orientation: {
                    heading: CesiumMath.toRadians(0.0),
                    pitch: CesiumMath.toRadians(-15.0),
                },
            });
        })();

        return () => {
            cancelled = true;
            cesiumViewer.current?.destroy();
            cesiumViewer.current = null;
        };
    }, []);

    if (!Ion.defaultAccessToken) {
        return (
            <div id={styles.cesiumTokenError}>
                <p>
                    Go to{" "}
                    <a href="https://cesium.com/" target="_blank" rel="noreferrer">
                        https://cesium.com/
                    </a>{" "}
                    to obtain an access token and enter it in CesiumCanvas.tsx
                </p>
            </div>
        );
    }
    return <div id={styles.cesium} ref={divRef}></div>;
};

export default CesiumCanvas;
