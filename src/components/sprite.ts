import { expectAsset } from "../util";

export interface SpriteOpts {
    imageSize?: { w: number; h: number };
    spriteSize?: { w: number; h: number };
    spriteIndex?: number;
}

export class Sprite {
    public name: string;
    public url: string;
    public imageSize: { w: number; h: number };
    public spriteIndex: number;
    public spriteSize: { w: number; h: number };
    public bounds: { x: number; y: number };
    public image: HTMLImageElement;

    constructor(name: string, opts?: SpriteOpts) {
        this.name = name;
        this.url = expectAsset(name);
        this.bounds = { x: 0, y: 0 };
        this.spriteIndex = 0;

        this.imageSize = { w: 32, h: 32 };
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
            if (opts.imageSize) {
                this.imageSize = opts.imageSize;
            }
            this.updateBounds();
        }
    }

    public setSpriteIndex(index: number) {
        this.spriteIndex = index;
        this.updateBounds();
    }

    private updateBounds() {
        const cols = Math.floor(this.imageSize.w / this.spriteSize.w);
        this.bounds.x = (this.spriteIndex % cols) * this.spriteSize.w;
        this.bounds.y = Math.floor(this.spriteIndex / cols) * this.spriteSize.h;
    }
}
