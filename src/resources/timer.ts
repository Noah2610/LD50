export interface TimerProps {
    endTime: number;
    loop?: boolean;
}

export class Timer {
    public time: number;
    public isFinished: boolean;

    private endTime: number;
    private lastUpdate: number;
    private loop: boolean;

    constructor({ endTime, loop }: TimerProps) {
        this.time = 0;
        this.endTime = endTime;
        this.loop = !!loop;
        this.lastUpdate = Date.now();
        this.isFinished = false;
    }

    public tick() {
        if (this.isFinished) {
            return;
        }

        const now = Date.now();
        const delta = now - this.lastUpdate;
        this.lastUpdate = now;
        this.time += delta;

        if (this.time >= this.endTime) {
            if (this.loop) {
                this.time = 0;
            } else {
                this.isFinished = true;
            }
        }
    }

    public reset() {
        this.time = 0;
        this.isFinished = false;
    }
}
