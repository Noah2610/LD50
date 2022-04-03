import { ValueOf } from "../types";
import { Facing } from "../components";
import { Config, CONFIG } from "../config";
import { GameContext } from "../context";
import { query } from "../query";
import { Keys } from "../resources";

const FACING_TO_SPRITE_INDEX: { [T in Facing]: number } = {
    Up: 0,
    Right: 1,
    Down: 2,
    Left: 3,
    UpRight: 4,
    UpLeft: 5,
    DownRight: 6,
    DownLeft: 7,
};

export function control(ctx: GameContext) {
    const controls = CONFIG.controls;

    for (const { entity, Turret, Sprite } of query(ctx, ["Turret", "Sprite"])) {
        let facing: Facing | null = null;

        switch (Turret.side) {
            case "Left": {
                facing = getFacing(ctx, controls.leftTurret);
                break;
            }
            case "Right": {
                facing = getFacing(ctx, controls.rightTurret);
                break;
            }
        }

        if (facing) {
            Turret.facing = facing;
            const spriteIndex = FACING_TO_SPRITE_INDEX[facing];
            Sprite.setSpriteIndex(spriteIndex);
        }
    }
}

function isPressed(
    keys: Keys,
    key: string | string[] | readonly string[],
): boolean {
    return typeof key === "string"
        ? keys.isKeyPressed(key)
        : key.some((k) => keys.isKeyPressed(k));
}

function getFacing(
    ctx: GameContext,
    controls: ValueOf<Config["controls"]>,
): Facing | null {
    const keys = ctx.resources.keys;

    const moveUp = isPressed(keys, controls.up);
    const moveDown = isPressed(keys, controls.down);
    const moveLeft = isPressed(keys, controls.left);
    const moveRight = isPressed(keys, controls.right);

    if (moveUp && moveRight) {
        return "UpRight";
    } else if (moveUp && moveLeft) {
        return "UpLeft";
    } else if (moveDown && moveRight) {
        return "DownRight";
    } else if (moveDown && moveLeft) {
        return "DownLeft";
    } else if (moveUp) {
        return "Up";
    } else if (moveDown) {
        return "Down";
    } else if (moveLeft) {
        return "Left";
    } else if (moveRight) {
        return "Right";
    }

    return null;
}
