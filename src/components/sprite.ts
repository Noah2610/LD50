import { expectAsset } from "../util";

export class Sprite {
    public name: string;
    public url: string;

    constructor(name: string) {
        this.name = name;
        this.url = expectAsset(name);
    }
}
