export const VIEW = {
    HOME: "home",
    BABYLON: "babylon",
    CESIUM: "cesium",
    AUTH: "auth",
} as const;

export type ViewType = (typeof VIEW)[keyof typeof VIEW];
