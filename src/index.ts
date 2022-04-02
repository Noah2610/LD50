import "./styles/index.scss";
import { GameContext, setupGameContext } from "./context";
import { expectCtx, expectEl } from "./util";
import { CONFIG } from "./config";
import * as systems from "./systems";
import { createEnemy, createPlayer } from "./entities";

function main() {
    setup();

    startGame();
}

function setup() {
    const canvas = expectEl<HTMLCanvasElement>("#game-canvas");
    setupGameContext({ canvas });

    canvas.width = CONFIG.size.w;
    canvas.height = CONFIG.size.h;
}

function startGame() {
    const ctx = expectCtx();

    ctx.entities = [
        createPlayer(),
        createEnemy("normal"),
        createEnemy("elite"),
    ];

    const runUpdate = () => {
        update(ctx);
        ctx.resources.keys.clear();
        window.requestAnimationFrame(runUpdate);
    };

    window.requestAnimationFrame(runUpdate);
}

function update(ctx: GameContext) {
    for (const system of Object.values(systems)) {
        system(ctx);
    }
}

window.onload = main;
