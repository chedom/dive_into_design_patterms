import {Shape} from "./Shape";
import {Visitor} from "./Visitor";

export class Circle extends Shape {
    accept(v: Visitor) {
        v.visitCircle(this);
    }
}