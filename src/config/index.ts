export const CONFIG = {
    canvas: {
        size: { w: 800, h: 800 },
        backgroundColor: "#ffffff",
    },
    game: {
        spawnEnemiesDelay: 1000,
        spawnEnemiesCount: 2,
        spawnEliteEnemiesDelay: 30000,
        spawnEliteEnemiesCount: 1,
        difficultyIncrease: 1,
        difficultyIncreaseEveryMs: 30000,
    },
    player: {
        size: { w: 64, h: 64 },
        shotSpeed: 1000,
        health: 1, //0,
    },
    enemies: {
        Normal: {
            size: { w: 64, h: 64 },
            speed: 3,
            health: 1,
            damage: 1,
        },
        Elite: {
            size: { w: 64, h: 64 },
            speed: 1,
            health: 10,
            damage: 10,
        },
    },
    bullet: {
        size: { w: 16, h: 16 },
        speed: 4,
        damage: 1,
    },
    controls: {
        leftTurret: {
            up: "w",
            down: "s",
            left: "a",
            right: "d",
        },
        rightTurret: {
            up: ["arrowup", "i"],
            down: ["arrowdown", "k"],
            left: ["arrowleft", "j"],
            right: ["arrowright", "l"],
        },
    },
} as const;

export type Config = typeof CONFIG;
