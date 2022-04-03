import { Bullet, Pos, Size, Velocity } from "../components";
import { CONFIG } from "../config";
import { Entity } from ".";

export function createBullet(x: number, y: number, angle: number): Entity {
    const { size, speed } = CONFIG.bullet;
    const vel = {
        x: Math.cos(angle) * speed,
        y: Math.sin(angle) * speed,
    };

    return new Entity([
        new Bullet(),
        new Pos(x, y),
        new Size(size.w, size.h),
        new Velocity(vel),
    ]);
}
