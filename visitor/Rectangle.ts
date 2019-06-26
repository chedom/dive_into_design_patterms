import {Shape} from "./Shape";
import {Visitor} from "./Visitor";

export class Rectangle extends Shape {
    accept(v: Visitor) {
        v.visitRectangle(this);
    }
}