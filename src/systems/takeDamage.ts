import { query } from "../query";
import { GameContext } from "../context";
import { doCollide } from "../collision";

export function takeDamage(ctx: GameContext) {
    for (const { Health, Pos, Size } of query(ctx, [
        "Turret",
        "Health",
        "Pos",
        "Size",
    ])) {
        const a = { ...Pos, ...Size };
        for (const enemy of query(ctx, ["ContactDamage", "Pos", "Size"])) {
            if (doCollide(a, { ...enemy.Pos, ...enemy.Size })) {
                Health.damage(enemy.ContactDamage.damage);
                enemy.entity.kill();
            }
        }
    }
}
