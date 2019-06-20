// The global command history is just a stack.

import {Command} from "./Command";

export class CommandHistory {
    private history: Command[];
    constructor() {
        this.history = [];
    }

    // Last in ...
    push(c: Command) {
        this.history.push(c);
    }

    // First  out...
    pop(): Command {
        return this.history.pop();
    }
}