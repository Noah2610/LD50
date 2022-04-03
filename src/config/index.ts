export const CONFIG = {
    canvas: {
        size: { w: 800, h: 800 },
        backgroundColor: "#ffffff",
    },
    player: {
        size: { w: 64, h: 64 },
    },
    enemies: {
        Normal: {
            size: { w: 64, h: 64 },
            speed: 3,
        },
        Elite: {
            size: { w: 64, h: 64 },
            speed: 1,
        },
    },
    controls: {
        leftTurret: {
            up: "w",
            down: "s",
            left: "a",
            right: "d",
        },
        rightTurret: {
            up: ["arrowup", "k"],
            down: ["arrowdown", "j"],
            left: ["arrowleft", "h"],
            right: ["arrowright", "l"],
        },
    },
} as const;

export type Config = typeof CONFIG;
