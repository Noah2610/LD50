export class Keys {
    downKeys: Set<string> = new Set();
    upKeys: Set<string> = new Set();
    pressedKeys: Set<string> = new Set();

    constructor() {
        document.addEventListener("keydown", (event) => {
            const key = event.key.toLowerCase();
            this.downKeys.add(key);
            this.pressedKeys.add(key);
        });
        document.addEventListener("keyup", (event) => {
            const key = event.key.toLowerCase();
            this.upKeys.add(key);
            this.pressedKeys.delete(key);
        });
    }

    public clear() {
        this.downKeys.clear();
        this.upKeys.clear();
    }

    public isKeyDown(key: string): boolean {
        return this.downKeys.has(key);
    }

    public isKeyUp(key: string): boolean {
        return this.upKeys.has(key);
    }

    public isKeyPressed(key: string): boolean {
        return this.pressedKeys.has(key);
    }
}
