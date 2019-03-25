import {Dot} from "./Dot";

export class Circle extends Dot {
    private radius: number;

    constructor(x: number, y: number, r: number) {
        super(x, y);
        this.radius = r;
    }

    draw() {
        console.log('Draw the circle');
    }
}
