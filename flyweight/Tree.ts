import {TreeType} from "./TreeType";
import {Canvas} from "./Canvas";

export class Tree {
    constructor(
        private x: number,
        private y: number,
        private type: TreeType,
    ) {}

    draw(canvas: Canvas) {
        this.type.draw(canvas, this.x, this.y)
    }
}