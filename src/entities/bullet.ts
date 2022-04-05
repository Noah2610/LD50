import {
    Animation,
    Bullet,
    DespawnOffscreen,
    Pos,
    Rotate,
    Size,
    Sprite,
    Velocity,
} from "../components";
import { CONFIG } from "../config";
import { expectCtx } from "../util";
import { Entity } from ".";

export function createBullet({
    x,
    y,
    angle,
}: {
    x: number;
    y: number;
    angle: number;
}): Entity {
    const difficulty = expectCtx().resources.difficulty;
    const { size, ...config } = CONFIG.bullet;
    const damage = config.damage; //* difficulty;
    const speed = config.speed * difficulty;

    const radians = (angle * Math.PI) / 180;
    const vel = {
        x: speed * Math.cos(radians),
        y: speed * Math.sin(radians),
    };

    return new Entity([
        new Bullet({ damage }),
        new Pos(x - size.w / 2, y - size.h / 2),
        new Size(size.w, size.h),
        new Velocity(vel),
        new Sprite("bullet", {
            spriteIndex: 0,
            spriteSize: { w: 32, h: 32 },
            imageSize: { w: 64, h: 64 },
        }),
        new Rotate(angle),
        new Animation([
            { idx: 0, ms: 200 },
            { idx: 1, ms: 200 },
            { idx: 2, ms: 200 },
            { idx: 3, ms: 200 },
        ]),
        new DespawnOffscreen(),
    ]);
}
