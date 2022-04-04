import { doCollide } from "../collision";
import { GameContext } from "../context";
import { query } from "../query";

export function handleBullets(ctx: GameContext) {
    for (const bullet of query(ctx, ["Bullet", "Pos", "Size"])) {
        for (const enemy of query(ctx, ["Enemy", "Pos", "Size"])) {
            const isColliding = doCollide(
                { ...bullet.Pos, ...bullet.Size },
                { ...enemy.Pos, ...enemy.Size },
            );
            if (isColliding) {
                bullet.entity.kill();
                enemy.Enemy.damage(bullet.Bullet.damage);
                if (!enemy.Enemy.isAlive) {
                    enemy.entity.kill();
                }
            }
        }
    }
}
