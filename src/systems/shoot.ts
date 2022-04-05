import { query } from "../query";
import { GameContext } from "../context";
import { createBullet } from "../entities/bullet";
import { CONFIG } from "../config";
import { Timer } from "../resources";

const PADDING = 4;

export function shoot(ctx: GameContext) {
    const timer = ctx.resources.timers.get("shoot");
    if (!timer || !timer.isFinished) return;

    for (const { entity, Turret, Pos, Size } of query(ctx, [
        "Turret",
        "Pos",
        "Size",
    ])) {
        const halfSize = { w: Size.w / 2, h: Size.h / 2 };
        let x = Pos.x + halfSize.w;
        let y = Pos.y + halfSize.h;
        const facing = Turret.facing;

        let angle: number;

        switch (facing) {
            case "Up": {
                angle = 270;
                y -= halfSize.h - PADDING;
                break;
            }
            case "Down": {
                angle = 90;
                y += halfSize.h - PADDING;
                break;
            }
            case "Left": {
                angle = 180;
                x -= halfSize.w - PADDING;
                break;
            }
            case "Right": {
                angle = 0;
                x += halfSize.w - PADDING;
                break;
            }
            case "UpLeft": {
                angle = 225;
                x -= halfSize.w - PADDING;
                y -= halfSize.h - PADDING;
                break;
            }
            case "UpRight": {
                angle = 315;
                x += halfSize.w - PADDING;
                y -= halfSize.h - PADDING;
                break;
            }
            case "DownLeft": {
                angle = 135;
                x -= halfSize.w - PADDING;
                y += halfSize.h - PADDING;
                break;
            }
            case "DownRight": {
                angle = 45;
                x += halfSize.w - PADDING;
                y += halfSize.h - PADDING;
                break;
            }
        }

        const bullet = createBullet({ x, y, angle });
        ctx.entities.push(bullet);
    }
}

shoot.setup = (ctx: GameContext) => {
    ctx.resources.timers.set(
        "shoot",
        new Timer({
            endTime: CONFIG.player.shotSpeed,
            loop: true,
        })
    );
};
