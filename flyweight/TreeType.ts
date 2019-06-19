import {Canvas} from "./Canvas";

export class TreeType {
    constructor(
        private name: string,
        private color: string,
        private texture: string,
    ) { }

    draw(canvas: Canvas, x: number, y: number) { }
}