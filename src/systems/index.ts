import { control, FACING_TO_SPRITE_INDEX } from "./control";
import { draw } from "./draw";
import { move } from "./move";
import { shoot } from "./shoot";
import { tick } from "./tick";

export { move, control, draw, shoot, tick };

import { GameContext } from "../context";
import { query } from "../query";

export interface System {
    (ctx: GameContext): void;
}

export const SYSTEMS: System[] = [tick, control, shoot, move, draw];
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
];
