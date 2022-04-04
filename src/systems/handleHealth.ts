import { query } from "../query";
import { GameContext } from "../context";

export function handleHealth(ctx: GameContext) {
    for (const { entity, Health } of query(ctx, ["Health"])) {
        if (!Health.isAlive) {
            entity.kill();
        }
    }
}
