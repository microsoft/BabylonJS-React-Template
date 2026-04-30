import { expect, test } from "@playwright/test";
import { PNG } from "pngjs";

/**
 * Smoke test for the Babylon view. Requires a GPU — do not run in CI without
 * hardware-accelerated WebGL available to the Chromium instance.
 *
 * We screenshot the canvas via Playwright (which goes through the compositor
 * and always sees the painted frame) and then check the PNG for colour
 * variance. Reading pixels back via `gl.readPixels` would not work because
 * Babylon does not enable `preserveDrawingBuffer`, so the back buffer is
 * already cleared by the time a test could read from it.
 */

const luminanceRange = (png: PNG): number => {
    let min = 255;
    let max = 0;
    // Sample every 64th pixel — enough to catch variance, cheap on each poll.
    for (let i = 0; i < png.data.length; i += 4 * 64) {
        const lum = (png.data[i] + png.data[i + 1] + png.data[i + 2]) / 3;
        if (lum < min) min = lum;
        if (lum > max) max = lum;
    }
    return max - min;
};

test.describe("Babylon scene", () => {
    test("renders the Cornell box scene to the canvas", async ({ page }) => {
        await page.goto("/");

        // Switch to the Babylon view (lazy chunk).
        await page.getByText("Babylon Example").click();

        const canvas = page.locator("canvas");
        await expect(canvas).toBeVisible();

        // Sanity-check that the canvas owns a real WebGL context.
        const hasWebGL = await canvas.evaluate((c: HTMLCanvasElement) => {
            return !!(c.getContext("webgl2") || c.getContext("webgl"));
        });
        expect(hasWebGL, "canvas has a WebGL context").toBe(true);

        // Poll until the canvas has painted something with real colour
        // variance. The Cornell box has a red wall, a green Suzanne and a
        // white pillar, so once the scene renders the luminance range is wide.
        await expect
            .poll(
                async () => luminanceRange(PNG.sync.read(await canvas.screenshot({ type: "png" }))),
                {
                    message:
                        "canvas screenshot is uniformly coloured — Babylon scene did not render",
                    timeout: 20_000,
                    intervals: [500, 1000, 1500],
                }
            )
            .toBeGreaterThan(40);
    });
});
