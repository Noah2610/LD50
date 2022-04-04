import {
    Animation,
    Enemy,
    Facing,
    Pos,
    Size,
    Sprite,
    Velocity,
} from "../components";
import { CONFIG } from "../config";
import { expectCtx, sample } from "../util";
import { Entity } from ".";

export type EnemyType = "Normal" | "Elite";

function getSpawnLocation(enemySize: { w: number; h: number }): {
    x: number;
    y: number;
    dx: number;
    dy: number;
} {
    const { w, h } = CONFIG.canvas.size;
    const eW = enemySize.w;
    const eH = enemySize.h;
    const offset = 64;

    const from: Facing = sample([
        "Up",
        "Down",
        "Left",
        "Right",
        "UpLeft",
        "UpRight",
        "DownLeft",
        "DownRight",
    ])!;

    switch (from) {
        case "Up":
            return {
                x: w / 2 - eW / 2,
                y: -offset - eH / 2,
                dx: 0,
                dy: 1,
            };
        case "Down":
            return {
                x: w / 2 - eW / 2,
                y: h + offset - eH / 2,
                dx: 0,
                dy: -1,
            };
        case "Left":
            return {
                x: -offset - eW / 2,
                y: h / 2 - eH / 2,
                dx: 1,
                dy: 0,
            };
        case "Right":
            return {
                x: w + offset - eW / 2,
                y: h / 2 - eH / 2,
                dx: -1,
                dy: 0,
            };
        case "UpLeft":
            return {
                x: -offset - eW / 2,
                y: -offset - eH / 2,
                dx: 1,
                dy: 1,
            };
        case "UpRight":
            return {
                x: w + offset - eW / 2,
                y: -offset - eH / 2,
                dx: -1,
                dy: 1,
            };
        case "DownLeft":
            return {
                x: -offset - eW / 2,
                y: h + offset - eH / 2,
                dx: 1,
                dy: -1,
            };
        case "DownRight":
            return {
                x: w + offset - eW / 2,
                y: h + offset - eH / 2,
                dx: -1,
                dy: -1,
            };
    }
}

export function createEnemy(type: EnemyType): Entity {
    const difficulty = expectCtx().resources.difficulty;
    const { size, speed, health } = CONFIG.enemies[type];
    const { x, y, dx, dy } = getSpawnLocation(size);

    const enemy = new Entity([
        new Enemy({ speed, health: health * difficulty }),
        new Pos(x, y),
        new Size(size.w, size.h),
        new Velocity({ x: dx * speed, y: dy * speed }),
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
