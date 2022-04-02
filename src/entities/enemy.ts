import { Enemy, Pos, Size, Speed } from "../components";
import { CONFIG } from "../config";
import { Entity } from ".";

export type EnemyType = "normal" | "elite";

export function createEnemy(type: EnemyType): Entity {
    const { size, speed } = CONFIG.enemies[type];
    const enemy = new Entity([
        new Enemy(),
        new Pos(0, 0),
        new Size(size.w, size.h),
        new Speed(speed),
    ]);
    return enemy;
}
