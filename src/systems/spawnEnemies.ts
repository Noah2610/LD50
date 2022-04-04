import { createEnemy } from "../entities";
import { CONFIG } from "../config";
import { GameContext } from "../context";

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
