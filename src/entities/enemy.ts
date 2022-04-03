import { Enemy, Pos, Size, Velocity } from "../components";
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
    ]);
    return enemy;
}
