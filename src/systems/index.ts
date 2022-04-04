import { animation } from "./animation";
import { control, FACING_TO_SPRITE_INDEX } from "./control";
import { draw } from "./draw";
import { handleBullets } from "./handleBullets";
import { handleHealth } from "./handleHealth";
import { killEntities } from "./killEntities";
import { move } from "./move";
import { shoot } from "./shoot";
import { spawnEnemies } from "./spawnEnemies";
import { tick } from "./tick";

export {
    animation,
    control,
    draw,
    handleHealth,
    killEntities,
    move,
    shoot,
    spawnEnemies,
    tick,
};

import { GameContext } from "../context";
import { query } from "../query";
import { CONFIG } from "../config";

export interface System {
    (ctx: GameContext): void;
}

export const SYSTEMS: System[] = [
    tick,
    animation,
    control,
    shoot,
    spawnEnemies,
    move,
    handleBullets,
    handleHealth,
    killEntities,
    draw,
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

    (ctx: GameContext) => {
        let lastUpdate = Date.now();

        setInterval(() => {
            const now = Date.now();
            const delta = now - lastUpdate;
            lastUpdate = now;
            ctx.resources.time += delta;
            ctx.resources.difficulty =
                (Math.floor(
                    ctx.resources.time / CONFIG.game.difficultyIncreaseEveryMs,
                ) +
                    1) *
                CONFIG.game.difficultyIncrease;
        }, 1000);
    },
];
