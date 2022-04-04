import { GameContext } from "../context";
import { query } from "../query";

export function killAfterAnimation(ctx: GameContext) {
    for (const { entity, Animation } of query(ctx, [
        "KillAfterAnimation",
        "Animation",
    ])) {
        if (Animation.isStopped) {
            entity.kill();
        }
    }
}
