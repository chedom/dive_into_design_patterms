import {Shape} from "./Shape";
import { Visitor } from "./Visitor";

// Each concrete component class must implement the `accept`
// method in such a way that it calls the visitor's method that
// corresponds to the component's class.
export class Dot extends Shape {
    accept(v: Visitor) {
        // Note that we're calling `visitDot`, which matches the
        // current class name. This way we let the visitor know the
        // class of the component it works with.
        v.visitDot(this)
    }
}