import { expect, test } from "@playwright/test";

test("loads the lazy Cesium and authentication views without configuration", async ({ page }) => {
    const errors: Error[] = [];
    page.on("pageerror", (error) => errors.push(error));

    await page.goto("/");
    await expect(
        page.getByRole("heading", { name: "Hey, React + Babylon + Cesium Developers!" })
    ).toBeVisible();

    await page.getByText("Cesium Example", { exact: true }).click();
    await expect(page.getByText("to obtain an access token")).toBeVisible();

    await page.getByText("Auth Example", { exact: true }).click();
    await expect(
        page.getByText("Azure Active Directory and Tenant ID config not set")
    ).toBeVisible();

    await page.getByText("Home", { exact: true }).click();
    await expect(
        page.getByRole("heading", { name: "Hey, React + Babylon + Cesium Developers!" })
    ).toBeVisible();
    expect(errors).toEqual([]);
});
