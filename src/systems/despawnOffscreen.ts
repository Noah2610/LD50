import { query } from "../query";
import { CONFIG } from "../config";
import { GameContext } from "../context";

export function despawnOffscreen(ctx: GameContext) {
    const canvasSize = CONFIG.canvas.size;
    for (const { entity, DespawnOffscreen, Pos, Size } of query(ctx, [
        "DespawnOffscreen",
        "Pos",
        "Size",
    ])) {
        const isOffscreen =
            Pos.y < -Size.h ||
            Pos.y > canvasSize.h ||
            Pos.x < -Size.w ||
            Pos.x > canvasSize.w;
        const isOnscreen = !isOffscreen;
        if (isOnscreen) {
            DespawnOffscreen.wasOnscreen = true;
        } else if (DespawnOffscreen.wasOnscreen) {
            entity.kill();
        }
    }
}
