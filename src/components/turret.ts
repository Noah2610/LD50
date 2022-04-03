export type Facing =
    | "Up"
    | "Down"
    | "Left"
    | "Right"
    | "UpLeft"
    | "UpRight"
    | "DownLeft"
    | "DownRight";

export type TurretSide = "Left" | "Right";

export class Turret {
    public side: TurretSide;
    public facing: Facing;

    constructor(side: TurretSide) {
        this.side = side;
        this.facing = side;
    }
}
