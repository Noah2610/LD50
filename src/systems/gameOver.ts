import { GameContext } from "../context";
import { query } from "../query";

export function gameOver(ctx: GameContext) {
    const isGameOver = query(ctx, ["Turret"]).next().done;
    if (isGameOver) {
        ctx.resources.isGameOver = true;
    }
}
