import { defineConfig, devices } from "@playwright/test";

/**
 * Playwright config for local Babylon smoke tests.
 *
 * NOTE: These tests require a GPU (WebGL must be hardware-accelerated for the
 * Babylon scene to actually paint pixels) and are intentionally NOT wired into
 * CI. Run locally with `npm run test:e2e`.
 */
export default defineConfig({
    testDir: "./e2e",
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    retries: 0,
    workers: 1,
    reporter: "list",
    use: {
        baseURL: "http://localhost:3000",
        trace: "on-first-retry",
    },
    projects: [
        {
            name: "chromium",
            use: {
                ...devices["Desktop Chrome"],
                // Force a real (or SwiftShader-backed) GL context. Without
                // these flags Chromium falls back to a software renderer
                // that returns black pixels for WebGL canvases.
                launchOptions: {
                    args: [
                        "--use-gl=angle",
                        "--enable-webgl",
                        "--ignore-gpu-blocklist",
                    ],
                },
            },
        },
    ],
    webServer: {
        command: "npm run dev -- --no-open",
        url: "http://localhost:3000",
        reuseExistingServer: !process.env.CI,
        timeout: 60_000,
    },
});
