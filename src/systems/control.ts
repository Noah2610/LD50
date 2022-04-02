import { Facing } from "../components";
import { CONFIG } from "../config";
import { GameContext } from "../context";
import { query } from "../query";

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
    const keys = ctx.resources.keys;

    const moveUp = keys.isKeyPressed(controls.up);
    const moveDown = keys.isKeyPressed(controls.down);
    const moveLeft = keys.isKeyPressed(controls.left);
    const moveRight = keys.isKeyPressed(controls.right);

    let facing: Facing | null = null;

    if (moveUp && moveRight) {
        facing = "UpRight";
    } else if (moveUp && moveLeft) {
        facing = "UpLeft";
    } else if (moveDown && moveRight) {
        facing = "DownRight";
    } else if (moveDown && moveLeft) {
        facing = "DownLeft";
    } else if (moveUp) {
        facing = "Up";
    } else if (moveDown) {
        facing = "Down";
    } else if (moveLeft) {
        facing = "Left";
    } else if (moveRight) {
        facing = "Right";
    }

    if (facing) {
        for (const { entity, Player, Sprite } of query(ctx, [
            "Player",
            "Sprite",
        ])) {
            Player.facing = facing;
            const spriteIndex = FACING_TO_SPRITE_INDEX[facing];
            Sprite.setSpriteIndex(spriteIndex);
        }
    }
}
