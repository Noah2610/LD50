import { control } from "./control";
import { draw } from "./draw";
import { move } from "./move";

export { move, control, draw };

export const SYSTEMS = [control, move, draw];
