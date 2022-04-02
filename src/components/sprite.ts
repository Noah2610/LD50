import { expectAsset } from "../util";

export interface SpriteOpts {
    spriteSize?: { w: number; h: number };
    spriteIndex?: number;
}

export class Sprite {
    public name: string;
    public url: string;
    public spriteIndex: number;
    public spriteSize: { w: number; h: number };
    public bounds: { x: number; y: number; width: number; height: number };
    public image: HTMLImageElement;

    constructor(name: string, opts?: SpriteOpts) {
        this.name = name;
        this.url = expectAsset(name);
        this.bounds = { x: 0, y: 0, width: 32, height: 32 };
        this.spriteIndex = 0;

        this.spriteSize = { w: 32, h: 32 };

        this.image = new Image();
        this.image.src = this.url;

        if (opts) {
            if (opts.spriteSize) {
                this.spriteSize = opts.spriteSize;
            }
            if (opts.spriteIndex !== undefined) {
                this.spriteIndex = opts.spriteIndex;
            }
            this.updateBounds();
        }
    }

    public setSpriteIndex(index: number) {
        this.spriteIndex = index;
        this.updateBounds();
    }

    private updateBounds() {
        this.bounds.x = this.spriteIndex * this.spriteSize.w;
        this.bounds.y =
            Math.floor(this.spriteIndex / this.spriteSize.w) *
            this.spriteSize.h;
        this.bounds.width = this.spriteSize.w;
        this.bounds.height = this.spriteSize.h;
    }
}
