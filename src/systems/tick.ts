import { GameContext } from "../context";

export function tick(ctx: GameContext) {
    for (const timer of ctx.resources.timers.values()) {
        timer.tick();
    }
}
