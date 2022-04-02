import { query } from "../query";
import { GameContext } from "../context";

export function move(ctx: GameContext) {
    for (const { entity, Pos, Velocity } of query(ctx, ["Pos", "Velocity"])) {
        if (Velocity.maxVelocity !== undefined) {
            for (const axis of ["x", "y"] as const) {
                if (Velocity[axis] > Velocity.maxVelocity) {
                    Velocity[axis] = Velocity.maxVelocity;
                }
                if (Velocity[axis] < -Velocity.maxVelocity) {
                    Velocity[axis] = -Velocity.maxVelocity;
                }
            }
        }

        if (Velocity.decreaseVelocity !== undefined) {
            for (const axis of ["x", "y"] as const) {
                if (Velocity[axis] > 0) {
                    Velocity[axis] -= Velocity.decreaseVelocity;
                    if (Velocity[axis] < 0) {
                        Velocity[axis] = 0;
                    }
                }
                if (Velocity[axis] < 0) {
                    Velocity[axis] += Velocity.decreaseVelocity;
                    if (Velocity[axis] > 0) {
                        Velocity[axis] = 0;
                    }
                }
            }
        }

        Pos.x += Velocity.x;
        Pos.y += Velocity.y;
    }
}
