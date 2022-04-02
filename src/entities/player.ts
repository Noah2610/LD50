import { Player, Pos, Size } from "../components";
import { CONFIG } from "../config";
import { Entity } from ".";

export function createPlayer(): Entity {
    const size = CONFIG.player.size;
    const player = new Entity([
        new Player(),
        new Pos(0, 0),
        new Size(size.w, size.h),
    ]);
    return player;
}
