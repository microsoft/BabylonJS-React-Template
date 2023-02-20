import React, { useEffect, useRef } from "react";
import { BabylonScene } from "../babylon/BabylonScene";
import styles from "./BabylonCanvas.module.css";

/**
 * Instantiates and a BabylonScene instance. All 3D content using BabylonJS should go here.
 * @returns 
 */
const BabylonCanvas = () => {
    const canvasRef = useRef();
    const babylonSceneRef = useRef(null);

    useEffect(() => {
        if (babylonSceneRef.current === null) {
            babylonSceneRef.current = new BabylonScene(canvasRef.current);
        }
    }, []);

    return (
        <canvas ref={canvasRef} id={styles.canvas}></canvas>
    );
}

export default BabylonCanvas;
