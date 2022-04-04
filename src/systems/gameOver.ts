import { expectEl } from "../util";
import { GameContext } from "../context";
import { query } from "../query";

export function gameOver(ctx: GameContext) {
    if (ctx.resources.isGameOver) return;

    const isGameOver = query(ctx, ["Turret"]).next().done;
    if (isGameOver) {
        ctx.resources.isGameOver = true;
        const gameOverEl = expectEl("#game .game-over");
        gameOverEl.classList.remove("hidden");
    }
}
