import { animation } from "./animation";
import { control, FACING_TO_SPRITE_INDEX } from "./control";
import { despawnOffscreen } from "./despawnOffscreen";
import { draw } from "./draw";
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

    (ctx: GameContext) => {
        let lastUpdate = Date.now();

        setInterval(() => {
            const now = Date.now();
            const delta = now - lastUpdate;
            lastUpdate = now;
            ctx.resources.time += delta;
            ctx.resources.difficulty =
                (Math.floor(
                    ctx.resources.time / CONFIG.game.difficultyIncreaseEveryMs
                ) +
                    1) *
                CONFIG.game.difficultyIncrease;
        }, 1000);
    },
];
