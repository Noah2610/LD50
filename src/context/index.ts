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
        isRunning: boolean;
        isGameOver: boolean;
        itemsToSelect: Item[];
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
            timers: new Map(),
            time: 0,
            difficulty: 1,
            stats: {
                kills: 0,
            },
            isRunning: false,
            isGameOver: false,
        },
        entities: [],
    };
    window.CTX = ctx;
    return ctx;
}
