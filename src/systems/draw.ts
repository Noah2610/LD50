import { GameContext } from "../context";
import { query } from "../query";

export function draw(ctx: GameContext) {
    const { el: canvas, ctx: canvasCtx } = ctx.canvas;

    for (const { entity, Pos, Size } of query(ctx, ["Pos", "Size"])) {
        const spriteOpt = entity.getComponent("Sprite");
        const rotateOpt = entity.getComponent("Rotate");
        const healthOpt = entity.getComponent("Health");

        if (rotateOpt) {
            canvasCtx.save();
            canvasCtx.translate(Pos.x + Size.w / 2, Pos.y + Size.h / 2);
            canvasCtx.rotate((rotateOpt.angle * Math.PI) / 180);
            canvasCtx.translate(-Pos.x - Size.w / 2, -Pos.y - Size.h / 2);
        }

        if (spriteOpt) {
            const { image, bounds, spriteSize } = spriteOpt;
            canvasCtx.drawImage(
                image,
                bounds.x,
                bounds.y,
                spriteSize.w,
                spriteSize.h,
                Pos.x,
                Pos.y,
                Size.w,
                Size.h
            );
        } else {
            const colorOpt = entity.getComponent("Color");
            if (colorOpt) {
                canvasCtx.fillStyle = colorOpt.color;
                canvasCtx.fillRect(Pos.x, Pos.y, Size.w, Size.h);
            }
        }

        if (healthOpt && healthOpt.maxHealth > 1) {
            const { health, maxHealth } = healthOpt;
            const padding = 8;
            canvasCtx.fillStyle = "red";
            canvasCtx.fillRect(
                Pos.x,
                Pos.y + Size.h + padding,
                Size.w * (health / maxHealth),
                padding
            );
        }

        if (rotateOpt) {
            canvasCtx.restore();
        }
    }
}

draw.alwaysUpdate = true;
