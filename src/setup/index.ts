import TURRET_SRC from "../../assets/turret.png";
import BULLET_SRC from "../../assets/bullet.png";
import ENEMY_SRC from "../../assets/enemy.png";

import { GameContext, setupGameContext } from "../context";
import { expectEl } from "../util";
import { CONFIG } from "../config";

export function setup() {
    const canvas = expectEl<HTMLCanvasElement>("#game-canvas");
    const ctx = setupGameContext({ canvas });
    setupAssets(ctx);

    canvas.width = CONFIG.canvas.size.w;
    canvas.height = CONFIG.canvas.size.h;
}

function setupAssets(ctx: GameContext) {
    ctx.assets.set("turret", TURRET_SRC);
    ctx.assets.set("bullet", BULLET_SRC);
    ctx.assets.set("enemy", ENEMY_SRC);
}
