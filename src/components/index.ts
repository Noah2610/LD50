export * from "./_export";

import type { ValueOf } from "../types";
import type * as components from "./_export";

export type Component = InstanceType<ValueOf<typeof components>>;
export type ComponentName = keyof typeof components;
export type ComponentOfName<N extends ComponentName> = InstanceType<
    typeof components[N]
>;
