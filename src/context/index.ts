import { CONFIG } from "../config";
import { Entity } from "../entities";
import { Keys, Stats, Timer } from "../resources";

export interface GameContext {
    canvas: {
        el: HTMLCanvasElement;
        ctx: CanvasRenderingContext2D;
    };
    assets: Map<string, string>;
    resources: {
        keys: Keys;
        timers: Map<string, Timer>;
        time: number;
        difficulty: number;
        stats: Stats;
    };
    entities: Entity[];
}

export function setupGameContext({
    canvas,
}: {
    canvas: HTMLCanvasElement;
}): GameContext {
    const ctx: GameContext = {
        canvas: { el: canvas, ctx: canvas.getContext("2d")! },
        assets: new Map(),
        resources: {
            keys: new Keys(),
            timers: new Map([
                [
                    "shoot",
                    new Timer({
                        endTime: CONFIG.player.shotSpeed,
                        loop: true,
                    }),
                ],
                [
                    "spawnEnemies",
                    new Timer({
                        endTime: CONFIG.game.spawnEnemiesDelay,
                        loop: true,
                    }),
                ],
            ]),
            time: 0,
            difficulty: 1,
            stats: {
                kills: 0,
            },
        },
        entities: [],
    };
    window.CTX = ctx;
    return ctx;
}
