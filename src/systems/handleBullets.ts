import { CONFIG } from "../config";
import { doCollide } from "../collision";
import { GameContext } from "../context";
import { query } from "../query";

export function handleBullets(ctx: GameContext) {
    const size = CONFIG.canvas.size;

    for (const bullet of query(ctx, ["Bullet", "Pos", "Size"])) {
        if (
            bullet.Pos.y < -bullet.Size.h ||
            bullet.Pos.y > size.h ||
            bullet.Pos.x < -bullet.Size.w ||
            bullet.Pos.x > size.w
        ) {
            bullet.entity.kill();
            continue;
        }

        for (const enemy of query(ctx, ["Enemy", "Pos", "Size", "Health"])) {
            const isColliding = doCollide(
                { ...bullet.Pos, ...bullet.Size },
                { ...enemy.Pos, ...enemy.Size },
            );
            if (isColliding) {
                bullet.entity.kill();
                enemy.Health.damage(bullet.Bullet.damage);
                if (!enemy.Health.isAlive) {
                    ctx.resources.stats.kills++;
                }
            }
        }
    }
}
