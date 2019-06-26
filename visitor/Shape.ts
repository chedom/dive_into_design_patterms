// The component interface declares an `accept` method that
// takes the base visitor interface as an argument.

import {Visitor} from "./Visitor";

export abstract class Shape {
    move(x: number, y: number) {}
    draw() {}
    abstract accept(v: Visitor)
}