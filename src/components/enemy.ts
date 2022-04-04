export interface EnemyProps {
    speed: number;
    health: number;
}

export class Enemy {
    public speed: number;
    public health: number;
    public isAlive: boolean;

    constructor({ speed, health }: EnemyProps) {
        this.speed = speed;
        this.health = health;
        this.isAlive = true;
    }

    public damage(damage: number) {
        this.health -= damage;
        if (this.health <= 0) {
            this.isAlive = false;
        }
    }
}
