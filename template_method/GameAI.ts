// The abstract class defines a template method that contains a
// skeleton of some algorithm composed of calls, usually to
// abstract primitive operations. Concrete subclasses implement
// these operations, but leave the template method itself
// intact.
export abstract class GameAI {
    // The template method defines the skeleton of an algorithm.
    turn() {
        this.collectResources();
        this.buildStructures();
        this.buildUnits();
        this.attack();
    }

    // Some of the steps may be implemented right in a base
    // class.
    collectResources() {

    }

    abstract buildStructures()
    abstract buildUnits()

    // A class can have several template methods.
    attack() {
        const enemy: any = this.closestEnemy();
        if (enemy === null) {
            this.sendScouts()
        } else {
            this.sendWarriors(enemy.position)
        }
    }

    closestEnemy() {
        return {}
    }

    abstract sendScouts()
    abstract sendWarriors(pos: number)
}