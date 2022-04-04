import { GameContext } from "../context";

export function killEntities(ctx: GameContext) {
    for (let i = ctx.entities.length - 1; i >= 0; i--) {
        const entity = ctx.entities[i]!;
        if (!entity.isAlive) {
            ctx.entities.splice(i, 1);
        }
    }
}
