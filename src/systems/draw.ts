import { GameContext } from "../context";
import { query } from "../query";

export function draw(ctx: GameContext) {
    const canvasCtx = ctx.canvas.ctx;

    for (const { entity, Pos, Size } of query(ctx, ["Pos", "Size"])) {
        const spriteOpt = entity.getComponent("Sprite");

        if (spriteOpt) {
            // TODO
        } else {
            const colorOpt = entity.getComponent("Color");
            if (colorOpt) {
                canvasCtx.fillStyle = colorOpt.color;
                canvasCtx.fillRect(Pos.x, Pos.y, Size.w, Size.h);
            }
        }
    }
}
