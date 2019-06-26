import {Shape} from "./Shape";
import {Visitor} from "./Visitor";

export class CompoundShape extends Shape {
    accept(v: Visitor) {
        v.visitCompoundShape(this);
    }
}