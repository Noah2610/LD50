import { Timer } from "../resources";
import { GameContext } from "../context";
import { expectEl, formatMs } from "../util";

export function updateUi(ctx: GameContext) {
    const timer = ctx.resources.timers.get("updateUi");
    if (!timer || !timer.isFinished) return;

    const uiEl = expectEl("#game .ui");
    const timeEl = expectEl(".ui__time", uiEl);

    const timeS = formatMs(ctx.resources.time);
    timeEl.innerHTML = timeS;
}

updateUi.setup = (ctx: GameContext) => {
    ctx.resources.timers.set(
        "updateUi",
        new Timer({
            endTime: 1000,
            loop: true,
        }),
    );
};
