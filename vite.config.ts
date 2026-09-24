import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import cesium from "vite-plugin-cesium";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), cesium()],
    // Treat .babylon scene files as static assets that resolve to a URL when imported.
    assetsInclude: ["**/*.babylon"],
    server: {
        port: 3000,
        open: true,
    },
    build: {
        outDir: "dist",
        sourcemap: true,
        // Raise the warning threshold — the Babylon and Cesium chunks legitimately
        // sit above the default 500 kB limit even after tree-shaking.
        chunkSizeWarningLimit: 1500,
        rollupOptions: {
            output: {
                // Split the heaviest dependencies into their own vendor chunks.
                // This keeps the main entry small and lets the browser cache
                // each library independently across deploys.
                manualChunks(id: string) {
                    if (id.includes("node_modules")) {
                        // NOTE: do not group @babylonjs/* into a single chunk.
                        // Babylon ships per-shader and per-feature dynamic
                        // imports — Rollup splits them into many small chunks
                        // automatically, and forcing a manual group would
                        // collapse them all back into one ~10 MB blob.
                        if (id.includes("cesium")) {
                            return "cesium";
                        }
                        if (
                            id.includes("@azure/msal-browser") ||
                            id.includes("@azure/msal-react") ||
                            id.includes("@azure/msal-common")
                        ) {
                            return "msal";
                        }
                        if (
                            id.includes("react-dom") ||
                            id.includes("/react/") ||
                            id.includes("scheduler")
                        ) {
                            return "react";
                        }
                        if (
                            id.includes("@reduxjs") ||
                            id.includes("react-redux") ||
                            id.includes("redux")
                        ) {
                            return "redux";
                        }
                    }
                },
            },
        },
    },
});
