import {Graphic} from "./Graphic";

export class Dot implements Graphic {

    constructor(private x: number, private y: number) {}

    move(x: number, y: number) {
        this.x += x;
        this.y += y;
    }

    draw() {
        console.log("Draw the Dot");
    }

}
