import { GameContext } from "../context";

export function expectEl<T extends Element = HTMLElement>(
    query: string,
    rootEl?: Element,
): T {
    const el = (rootEl || document).querySelector<T>(query);
    if (!el) {
        throw new Error(`[expectEl] Element not found: ${query}`);
    }
    return el;
}

export function expectCtx(): GameContext {
    const ctx = window.CTX;
    if (!ctx) {
        throw new Error("[expectCtx] GameContext not found");
    }
    return ctx;
}

export function expectAsset(name: string): string {
    const ctx = expectCtx();
    const asset = ctx.assets.get(name);
    if (!asset) {
        throw new Error(`[expectAsset] Asset not found: ${name}`);
    }
    return asset;
}
