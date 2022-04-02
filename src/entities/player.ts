import { Color, Player, Pos, Size, Sprite } from "../components";
import { CONFIG } from "../config";
import { Entity } from ".";

export function createPlayer(): Entity {
    const { w, h } = CONFIG.player.size;
    const x = CONFIG.canvas.size.w / 2 - w / 2;
    const y = CONFIG.canvas.size.h / 2 - h / 2;

    const player = new Entity([
        new Player(),
        new Pos(x, y),
        new Size(w, h),
        new Sprite("turret", {
            spriteIndex: 0,
            spriteSize: { w: 32, h: 32 },
            imageSize: { w: 128, h: 128 },
        }),
        // new Color("red"),
    ]);
    return player;
}
