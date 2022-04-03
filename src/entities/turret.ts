import {
    Animation,
    Turret,
    TurretSide,
    Pos,
    Size,
    Sprite,
    Rotate,
} from "../components";
import { CONFIG } from "../config";
import { Entity } from ".";

export function createTurret(side: TurretSide): Entity {
    const { w, h } = CONFIG.player.size;
    const offset = side === "Left" ? -w / 2 : w / 2;
    const x = CONFIG.canvas.size.w / 2 - w / 2 + offset;
    const y = CONFIG.canvas.size.h / 2 - h / 2;

    const turret = new Entity([
        new Turret(side),
        new Pos(x, y),
        new Size(w, h),
        new Sprite("turret", {
            spriteIndex: 0,
            spriteSize: { w: 32, h: 32 },
            imageSize: { w: 128, h: 128 },
        }),
    ]);
    return turret;
}
