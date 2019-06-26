// Subclasses can also override some operations with a default
// implementation.

import {GameAI} from "./GameAI";

export class MonstersAI extends GameAI {

    collectResources() {
        super.collectResources();
        // do something else
    }

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