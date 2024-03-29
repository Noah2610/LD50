import { Component, ComponentName, ComponentOfName } from "../components";
export * from "./enemy";
export * from "./turret";

export class Entity {
    public id: number;
    public components: Map<ComponentName, Component>;
    public isAlive: boolean;

    static nextId: number = 0;

    constructor(components?: Component[]) {
        this.id = Entity.nextId++;
        this.components = new Map();
        this.isAlive = true;
        if (components) {
            for (const component of components) {
                const name = component.constructor.name as ComponentName;
                this.components.set(name, component);
            }
        }
    }

    public addComponent(component: Component) {
        const name = component.constructor.name as ComponentName;
        this.components.set(name, component);
    }

    public removeComponent(name: ComponentName) {
        this.components.delete(name);
    }

    public getComponent<N extends ComponentName>(
        name: N,
    ): ComponentOfName<N> | null {
        return (
            (this.components.get(name) as ComponentOfName<N> | undefined) ||
            null
        );
    }

    public kill() {
        this.isAlive = false;
    }
}
