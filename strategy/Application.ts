// The client code picks a concrete strategy and passes it to
// the context. The client should be aware of the differences
// between strategies in order to make the right choice.

import {ConcreteStrategyAdd} from "./ConcreteStrategyAdd";
import {Context} from "./Context";
import {ConcreteStrategySubtract} from "./ConcreteStrategySubtract";
import {ConcreteStrategyMultiply} from "./ConcreteStrategyMultiply";

export class Application {
    execute(a: number, b: number, action: string) {
        const defStr = new ConcreteStrategyAdd();
        const context = new Context(defStr);

        // Read first number.
        // Read last number.
        // Read the desired action from user input.

        if (action === "addition") {
            context.setStrategy(new ConcreteStrategyAdd());
        } else if (action == "subsctraction") {
            context.setStrategy(new ConcreteStrategySubtract());
        } else {
            context.setStrategy(new ConcreteStrategyMultiply());
        }

        const res = context.executeStrategy(a, b);
        console.log("Result: ", res);
    }
}