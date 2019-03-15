import {IRoundPeg} from "./IRoundPeg";

export class RoundPeg implements IRoundPeg {
    private radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    public getRadius(): number {
        return this.radius;
    }
}
