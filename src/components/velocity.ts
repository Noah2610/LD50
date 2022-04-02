export interface VelocityProps {
    x: number;
    y: number;
    maxVelocity?: number;
    decreaseVelocity?: number;
}

export class Velocity {
    public x: number;
    public y: number;
    public maxVelocity?: number;
    public decreaseVelocity?: number;

    constructor({ x, y, maxVelocity, decreaseVelocity }: VelocityProps) {
        this.x = x;
        this.y = y;
        this.maxVelocity = maxVelocity;
        this.decreaseVelocity = decreaseVelocity;
    }
}
