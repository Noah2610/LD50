export interface EnemyProps {
    speed: number;
}

export class Enemy {
    public speed: number;

    constructor({ speed }: EnemyProps) {
        this.speed = speed;
    }
}
