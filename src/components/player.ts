export type Facing =
    | "Up"
    | "Down"
    | "Left"
    | "Right"
    | "UpLeft"
    | "UpRight"
    | "DownLeft"
    | "DownRight";

export class Player {
    public facing: Facing;

    constructor() {
        this.facing = "Right";
    }
}
