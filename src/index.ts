import "./styles/index.scss";
import { GameContext, setupGameContext } from "./context";
import { expectCtx, expectEl } from "./util";
import { CONFIG } from "./config";
import { SYSTEMS } from "./systems";
import { createEnemy, createPlayer } from "./entities";

function main() {
    setup();

    startGame();
}

function setup() {
    const canvas = expectEl<HTMLCanvasElement>("#game-canvas");
    setupGameContext({ canvas });

    canvas.width = CONFIG.canvas.size.w;
    canvas.height = CONFIG.canvas.size.h;
}

function startGame() {
    const ctx = expectCtx();

    ctx.entities = [
        createPlayer(),
        createEnemy("normal"),
        createEnemy("elite"),
    ];

    const runUpdate = () => {
        const { size, backgroundColor } = CONFIG.canvas;
        ctx.canvas.ctx.fillStyle = backgroundColor;
        ctx.canvas.ctx.fillRect(0, 0, size.w, size.h);

        update(ctx);

        ctx.resources.keys.clear();
        window.requestAnimationFrame(runUpdate);
    };

    window.requestAnimationFrame(runUpdate);
}

function update(ctx: GameContext) {
    for (const system of Object.values(SYSTEMS)) {
        system(ctx);
    }
}

window.onload = main;
