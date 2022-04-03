import { query } from "../query";
import { GameContext } from "../context";

export function shoot(ctx: GameContext) {
    const timer = ctx.resources.timers.get("shoot");
    if (!timer || !timer.isFinished) return;

    for (const { entity, Turret, Pos } of query(ctx, ["Turret", "Pos"])) {
        const { x, y } = Pos;
        const facing = Turret.facing;

        let angle: number;

        switch (facing) {
            case "Up": {
                angle = 0;
                break;
            }
            case "Down": {
                angle = 180;
                break;
            }
            case "Left": {
                angle = 270;
                break;
            }
            case "Right": {
                angle = 90;
                break;
            }
            case "UpLeft": {
                angle = 315;
                break;
            }
            case "UpRight": {
                angle = 45;
                break;
            }
            case "DownLeft": {
                angle = 225;
                break;
            }
            case "DownRight": {
                angle = 135;
                break;
            }
        }
    }
}
