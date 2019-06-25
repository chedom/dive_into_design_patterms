// The context defines the interface of interest to clients.
import {Strategy} from "./Strategy";

export class Context {
    // The context maintains a reference to one of the strategy
    // objects. The context doesn't know the concrete class of a
    // strategy. It should work with all strategies via the
    // strategy interface.
    private strategy: Strategy;
    constructor(strategy: Strategy) {
        this.strategy = strategy;
    }

    // Usually the context accepts a strategy through the
    // constructor, and also provides a setter so that the
    // strategy can be switched at runtime.
    setStrategy(strategy: Strategy) {
        this.strategy = strategy;
    }

    // The context delegates some work to the strategy object
    // instead of implementing multiple versions of the
    // algorithm on its own.
    executeStrategy(a: number, b: number): number {
        return this.strategy.execute(a, b);
    }
}