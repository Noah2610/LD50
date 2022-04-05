import { animation } from "./animation";
import { control, FACING_TO_SPRITE_INDEX } from "./control";
import { despawnOffscreen } from "./despawnOffscreen";
import { draw } from "./draw";
import { gameOver } from "./gameOver";
import { handleBullets } from "./handleBullets";
import { handleHealth } from "./handleHealth";
import { killAfterAnimation } from "./killAfterAnimation";
import { killEntities } from "./killEntities";
import { move } from "./move";
import { shoot } from "./shoot";
import { spawnEnemies } from "./spawnEnemies";
import { takeDamage } from "./takeDamage";
import { tick } from "./tick";
import { updateUi } from "./updateUi";

export {
    animation,
    control,
    despawnOffscreen,
    draw,
    gameOver,
    handleHealth,
    killAfterAnimation,
    killEntities,
    move,
    shoot,
    spawnEnemies,
    takeDamage,
    tick,
    updateUi,
};

import { GameContext } from "../context";
import { query } from "../query";
import { CONFIG } from "../config";

export interface System {
    (ctx: GameContext): void;
    setup?: (ctx: GameContext) => void;
    alwaysUpdate?: boolean;
}

export const SYSTEMS: System[] = [
    tick,
    animation,
    killAfterAnimation,
    control,
    shoot,
    spawnEnemies,
    move,
    despawnOffscreen,
    handleBullets,
    takeDamage,
    handleHealth,
    killEntities,
    gameOver,
    draw,
    updateUi,
];

export const STARTUP_SYSTEMS: System[] = [
    (ctx: GameContext) => {
        for (const { entity, Turret, Sprite } of query(ctx, [
            "Turret",
            "Sprite",
        ])) {
            const spriteIndex = FACING_TO_SPRITE_INDEX[Turret.facing];
            Sprite.setSpriteIndex(spriteIndex);
        }
    },

    scaleDifficulty,
];

function scaleDifficulty(ctx: GameContext) {
    let lastUpdate = Date.now();

    setInterval(() => {
        if (!ctx.resources.isRunning) return;

        const now = Date.now();
        const delta = now - lastUpdate;
        lastUpdate = now;
        ctx.resources.time += delta;

        const nextDifficulty =
            (Math.floor(
                ctx.resources.time / CONFIG.game.difficultyIncreaseEveryMs
            ) +
                1) *
            CONFIG.game.difficultyIncrease;

        if (nextDifficulty !== ctx.resources.difficulty) {
            ctx.resources.difficulty = nextDifficulty;

            const shootTimer = ctx.resources.timers.get("shoot");
            if (shootTimer) {
                shootTimer.setEndTime(
                    CONFIG.player.shotSpeed / ctx.resources.difficulty
                );
            }

            const spawnTimer = ctx.resources.timers.get("spawnEnemies");
            if (spawnTimer) {
                const nextDelay = Math.max(
                    CONFIG.game.spawnEnemiesDelay -
                        CONFIG.game.spawnEnemiesDelayDecrease *
                            ctx.resources.difficulty,
                    CONFIG.game.spawnEnemiesDelayMin
                );
                spawnTimer.setEndTime(nextDelay);
            }
        }
    }, 1000);
}
