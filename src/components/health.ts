export class Health {
    public health: number;
    public maxHealth: number;
    public isAlive: boolean;

    constructor(health: number) {
        this.health = health;
        this.maxHealth = health;
        this.isAlive = health > 0;
    }

    public damage(damage: number) {
        this.health -= damage;
        if (this.health <= 0) {
            this.isAlive = false;
        }
    }
}
