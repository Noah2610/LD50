import { Timer } from "../resources";
import { GameContext } from "../context";
import { query } from "../query";

export function animation(ctx: GameContext) {
    const timers = ctx.resources.timers;

    for (const { entity, Animation, Sprite } of query(ctx, [
        "Animation",
        "Sprite",
    ])) {
        const frames = Animation.frames;
        if (!frames[0]) continue;

        const timerId = `animation-${entity.id}`;
        if (!timers.has(timerId)) {
            timers.set(timerId, new Timer({ endTime: frames[0].ms }));
        }
        const timer = timers.get(timerId)!;

        if (timer.isFinished) {
            Animation.index = (Animation.index + 1) % frames.length;
            const { idx, ms } = frames[Animation.index]!;
            Sprite.setSpriteIndex(idx);
            timer.reset();
            timer.setEndTime(ms);
        }
    }
}
