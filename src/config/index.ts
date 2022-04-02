export const CONFIG = {
    canvas: {
        size: { w: 800, h: 800 },
        backgroundColor: "#ffffff",
    },
    player: {
        size: { w: 64, h: 64 },
    },
    enemies: {
        normal: {
            size: { w: 64, h: 64 },
            speed: 3,
        },
        elite: {
            size: { w: 64, h: 64 },
            speed: 1,
        },
    },
} as const;
