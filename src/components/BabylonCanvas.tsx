import { useEffect, useRef } from "react";
import { BabylonScene } from "../babylon/BabylonScene";
import styles from "./BabylonCanvas.module.css";

/**
 * Hosts a BabylonScene instance. All 3D content using Babylon.js belongs here.
 */
const BabylonCanvas = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const sceneRef = useRef<BabylonScene | null>(null);

    useEffect(() => {
        if (!canvasRef.current || sceneRef.current) {
            return;
        }
        sceneRef.current = new BabylonScene(canvasRef.current);

        return () => {
            sceneRef.current?.dispose();
            sceneRef.current = null;
        };
    }, []);

    return <canvas ref={canvasRef} id={styles.canvas}></canvas>;
};

export default BabylonCanvas;
