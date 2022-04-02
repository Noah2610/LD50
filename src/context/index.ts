import { Entity } from "../entities";
import { Keys } from "../resources";

export interface GameContext {
    canvas: {
        el: HTMLCanvasElement;
        ctx: CanvasRenderingContext2D;
    };
    assets: Map<string, string>;
    resources: {
        keys: Keys;
    };
    entities: Entity[];
}

export function setupGameContext({ canvas }: { canvas: HTMLCanvasElement }) {
    window.CTX = {
        canvas: { el: canvas, ctx: canvas.getContext("2d")! },
        assets: new Map(),
        resources: {
            keys: new Keys(),
        },
        entities: [],
    };
}
