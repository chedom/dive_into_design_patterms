import {Strategy} from "./Strategy";

export class ConcreteStrategyAdd implements Strategy {
    execute(a: number, b: number): number {
        return a + b;
    }
}