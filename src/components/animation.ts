export type AnimationFrames = AnimationFrame[];

export interface AnimationFrame {
    idx: number;
    ms: number;
}

export class Animation {
    public frames: AnimationFrames;
    public index: number;

    constructor(frames: AnimationFrames) {
        this.frames = frames;
        this.index = 0;
    }
}
