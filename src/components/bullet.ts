export interface BulletProps {
    damage: number;
}

export class Bullet {
    public damage: number;

    constructor({ damage }: BulletProps) {
        this.damage = damage;
    }
}
