import { Entity } from "../entities";
import { ComponentName, ComponentOfName } from "../components";
import { GameContext } from "../context";

export type Query<C extends ComponentName> = C;
export type QueryResult<C extends ComponentName> = {
    entity: Entity;
} & QueryResultComponents<C>;
type QueryResultComponents<C extends ComponentName> = {
    [T in C]: ComponentOfName<T>;
};

export type QueryGenerator<C extends ComponentName> = Generator<
    QueryResult<C>,
    void,
    void
>;

export function* query<C extends ComponentName>(
    ctx: GameContext,
    query: Query<C>[],
): QueryGenerator<C> {
    const entities = ctx.entities;
    for (const entity of entities) {
        let hasAllComponents = true;
        const components: Partial<QueryResultComponents<C>> = {};
        for (const name of query) {
            const comp = entity.getComponent(name);
            if (!comp) {
                hasAllComponents = false;
                break;
            }
            components[name] = comp;
        }

        if (hasAllComponents) {
            const result: QueryResult<C> = {
                entity,
                ...(components as Required<QueryResultComponents<C>>),
            };
            yield result;
        }
    }
}
