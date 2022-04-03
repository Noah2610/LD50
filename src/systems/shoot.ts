import { query } from "../query";
import { GameContext } from "../context";
import { createBullet } from "../entities/bullet";

export function shoot(ctx: GameContext) {
    const timer = ctx.resources.timers.get("shoot");
    if (!timer || !timer.isFinished) return;

    for (const { entity, Turret, Pos, Size } of query(ctx, [
        "Turret",
        "Pos",
        "Size",
    ])) {
        const x = Pos.x + Size.w / 2;
        const y = Pos.y + Size.h / 2;
        const facing = Turret.facing;

        let angle: number;

        switch (facing) {
            case "Up": {
                angle = 270;
                break;
            }
            case "Down": {
                angle = 90;
                break;
            }
            case "Left": {
                angle = 180;
                break;
            }
            case "Right": {
                angle = 0;
                break;
            }
            case "UpLeft": {
                angle = 225;
                break;
            }
            case "UpRight": {
                angle = 315;
                break;
            }
            case "DownLeft": {
                angle = 135;
                break;
            }
            case "DownRight": {
                angle = 45;
                break;
            }
        }

        const bullet = createBullet(x, y, angle);
        ctx.entities.push(bullet);
    }
}
