import { createEnemy } from "../entities";
import { CONFIG } from "../config";
import { GameContext } from "../context";
import { Timer } from "../resources";

export function spawnEnemies(ctx: GameContext) {
    const timer = ctx.resources.timers.get("spawnEnemies");
    if (timer?.isFinished) {
        const spawnEnemiesCount = Math.floor(
            CONFIG.game.spawnEnemiesCount * ctx.resources.difficulty
        );

        for (let i = 0; i < spawnEnemiesCount; i++) {
            const enemy = createEnemy("Normal");
            ctx.entities.push(enemy);
        }
    }

    const timerElite = ctx.resources.timers.get("spawnEliteEnemies");
    if (timerElite?.isFinished) {
        const spawnEliteEnemiesCount = Math.round(
            CONFIG.game.spawnEliteEnemiesCount * (ctx.resources.difficulty / 2)
        );

        for (let i = 0; i < spawnEliteEnemiesCount; i++) {
            const enemy = createEnemy("Elite");
            ctx.entities.push(enemy);
        }
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
    ctx.resources.timers.set(
        "spawnEliteEnemies",
        new Timer({
            endTime: CONFIG.game.spawnEliteEnemiesDelay,
            loop: true,
        })
    );
};
