import { useEffect, useRef } from "react";
import * as Cesium from 'cesium';

import "cesium/Build/Cesium/Widgets/widgets.css";
import styles from "./CesiumCanvas.module.css";

/**
 * Cesium Ion access token
 * This is required to access Cesium's 3D geospatial data.
 * Without this you won't see terrain or OSM data.
 * 
 * Go to https://ion.cesium.com/ to obtain an access token
 */
Cesium.Ion.defaultAccessToken = null;

/**
 * Renders the <div> container and creates an instance for the Cesium Viewer
 * @returns 
 */
const CesiumCanvas = () => {
    const divRef = useRef();
    const cesiumViewer = useRef(null);

    useEffect(() => {
        if (!Cesium.Ion.defaultAccessToken) {
            return;
        }
        if (cesiumViewer.current !== null) {
            return;
        }

        // Initialize the Cesium Viewer in the HTML element with the "cesiumContainer" ID.
        cesiumViewer.current = new Cesium.Viewer(divRef.current, {
            terrainProvider: Cesium.createWorldTerrain()
        });

        // Add Cesium OSM Buildings, a global 3D buildings layer.
        const buildingTileset = cesiumViewer.current.scene.primitives.add(Cesium.createOsmBuildings());

        // Fly the camera to San Francisco at the given longitude, latitude, and height.
        cesiumViewer.current.camera.flyTo({
            destination: Cesium.Cartesian3.fromDegrees(-122.4175, 37.655, 400),
            orientation: {
                heading: Cesium.Math.toRadians(0.0),
                pitch: Cesium.Math.toRadians(-15.0),
            }
        });
    }, []);

    if (Cesium.Ion.defaultAccessToken) {
        return <div id={styles.cesium} ref={divRef}></div>
    }
    else {
        return <div id={styles.cesiumTokenError}>
            <p>
                Go to <a href="https://cesium.com/">https://cesium.com/</a> to obtain an access token and enter in CesiumCanvas.js
            </p>
        </div>
    }
}

export default CesiumCanvas;