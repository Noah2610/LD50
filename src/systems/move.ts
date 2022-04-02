import { query } from "../query";
import { GameContext } from "../context";

export function move(ctx: GameContext) {
    for (const { entity, Pos, Player } of query(ctx, "Player", "Pos")) {
    }
}
