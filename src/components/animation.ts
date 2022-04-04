export type AnimationFrames = AnimationFrame[];

export interface AnimationFrame {
    idx: number;
    ms: number;
}

export interface AnimationOptions {
    /** Defaults to true */
    loop?: boolean;
}

export class Animation {
    public frames: AnimationFrames;
    public index: number;
    public loop: boolean;
    public isStopped: boolean;

    constructor(frames: AnimationFrames, opts?: AnimationOptions) {
        this.frames = frames;
        this.index = 0;
        this.loop = opts?.loop ?? true;
        this.isStopped = false;
    }
}
