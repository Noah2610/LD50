import { createEnemy } from "../entities";
import { CONFIG } from "../config";
import { GameContext } from "../context";
import { Timer } from "../resources";

export function spawnEnemies(ctx: GameContext) {
    const timer = ctx.resources.timers.get("spawnEnemies");
    if (!timer || !timer.isFinished) return;

    const spawnEnemiesCount =
        CONFIG.game.spawnEnemiesCount * ctx.resources.difficulty;

    for (let i = 0; i < spawnEnemiesCount; i++) {
        const enemy = createEnemy("Normal");
        ctx.entities.push(enemy);
    }
}

spawnEnemies.setup = (ctx: GameContext) => {
    ctx.resources.timers.set(
        "spawnEnemies",
        new Timer({
            endTime: CONFIG.game.spawnEnemiesDelay,
            loop: true,
        })
    );
};
