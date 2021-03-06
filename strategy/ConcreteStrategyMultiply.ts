import {Strategy} from "./Strategy";

export class ConcreteStrategyMultiply implements Strategy {
    execute(a: number, b: number): number {
        return a * b;
    }
}