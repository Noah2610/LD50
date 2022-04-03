import { Animation, Enemy, Pos, Size, Sprite, Velocity } from "../components";
import { CONFIG } from "../config";
import { Entity } from ".";

export type EnemyType = "Normal" | "Elite";

export function createEnemy(type: EnemyType): Entity {
    const { size, speed } = CONFIG.enemies[type];
    const enemy = new Entity([
        new Enemy({ speed }),
        new Pos(0, 0),
        new Size(size.w, size.h),
        new Velocity({ x: 0, y: 0 }),
        new Sprite("enemy", {
            spriteIndex: 0,
            spriteSize: { w: 32, h: 32 },
            imageSize: { w: 128, h: 128 },
        }),
        new Animation([
            {
                idx: 0,
                ms: 200,
            },
            {
                idx: 1,
                ms: 200,
            },
            {
                idx: 2,
                ms: 200,
            },
            {
                idx: 1,
                ms: 200,
            },
        ]),
    ]);
    return enemy;
}
