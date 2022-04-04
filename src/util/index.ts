import { GameContext } from "../context";

export function expectEl<T extends Element = HTMLElement>(
    query: string,
    rootEl?: Element
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

export function expectResource<T extends keyof GameContext["resources"]>(
    name: T
): GameContext["resources"][T] {
    const ctx = expectCtx();
    return ctx.resources[name];
}

export function sample<T>(arr: T[] | readonly T[]): T | null {
    return arr[Math.floor(Math.random() * arr.length)] || null;
}

export function formatMs(ms: number): string {
    const pad = (n: number) => n.toString().padStart(2, "0");

    let s = Math.floor(ms / 1000);
    const m = Math.floor(s / 60);
    s -= m * 60;

    return `${pad(m)}:${pad(s)}`;
}
