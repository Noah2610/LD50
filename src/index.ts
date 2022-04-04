import "./styles/index.scss";

import { GameContext } from "./context";
import { expectCtx } from "./util";
import { CONFIG } from "./config";
import { STARTUP_SYSTEMS, SYSTEMS } from "./systems";
import { createTurret } from "./entities";
import { setup } from "./setup";

function main() {
    setup();
    startGame();
}

function startGame() {
    const ctx = expectCtx();

    ctx.entities = [createTurret("Left"), createTurret("Right")];

    const runUpdate = () => {
        const { size, backgroundColor } = CONFIG.canvas;
        ctx.canvas.ctx.fillStyle = backgroundColor;
        ctx.canvas.ctx.fillRect(0, 0, size.w, size.h);

        update(ctx);

        ctx.resources.keys.clear();
        window.requestAnimationFrame(runUpdate);
    };

    ctx.resources.isRunning = true;

    window.requestAnimationFrame(() => {
        runStartupSystems(ctx);
        runUpdate();
    });
}

function update(ctx: GameContext) {
    for (const system of SYSTEMS) {
        if (ctx.resources.isRunning || system.alwaysUpdate) {
            system(ctx);
        }
    }
}

function runStartupSystems(ctx: GameContext) {
    for (const system of STARTUP_SYSTEMS) {
        system(ctx);
    }
    for (const system of SYSTEMS) {
        if (system.setup) {
            system.setup(ctx);
        }
    }
}

window.onload = main;
