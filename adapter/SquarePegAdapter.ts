import {IRoundPeg} from "./IRoundPeg";
import {SquarePeg} from "./SquarePeg";

export class SquarePegAdapter implements IRoundPeg {
    private peg: SquarePeg;

    constructor(peg: SquarePeg) {
        this.peg = peg;
    }

    getRadius(): number {
        return this.peg.getWidth() * Math.sqrt(2) /2;
    }
}
