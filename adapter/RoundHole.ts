import {IRoundPeg} from "./IRoundPeg";

export class RoundHole {
    private radius: number;
    constructor(radius: number) {
        this.radius = radius;
    }

    getRadius(): number {
        return this.radius;
    }

    public fit(peg: IRoundPeg): boolean {
        return this.getRadius() >= peg.getRadius();
    }
}
