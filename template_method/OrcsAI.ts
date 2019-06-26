// Concrete classes have to implement all abstract operations of
// the base class but they must not override the template method
// itself.

import {GameAI} from "./GameAI";

export class OrcsAI extends GameAI {
    buildStructures() {
        // Build farms, then barracks, then stronghold.
    }

    buildUnits() {
        // Build peon, add it to scouts group.
    }

    sendScouts() {
    }

    sendWarriors(pos: number) {
    }
}