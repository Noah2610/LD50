export const CONFIG = {
    canvas: {
        size: { w: 1000, h: 1000 },
        backgroundColor: "#ffffff",
    },
    game: {
        spawnEnemiesDelay: 500,
        spawnEnemiesDelayDecrease: 10,
        spawnEnemiesDelayMin: 50,
        spawnEnemiesCount: 1,
        spawnEliteEnemiesDelay: 20000,
        spawnEliteEnemiesCount: 1,
        difficultyIncrease: 1,
        difficultyIncreaseEveryMs: 20000,
    },
    player: {
        size: { w: 64, h: 64 },
        shotSpeed: 800,
        health: 10,
    },
    enemies: {
        Normal: {
            size: { w: 64, h: 64 },
            speed: 2,
            health: 1,
            damage: 1,
        },
        Elite: {
            size: { w: 64, h: 64 },
            speed: 0.5,
            health: 3,
            damage: 3,
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
