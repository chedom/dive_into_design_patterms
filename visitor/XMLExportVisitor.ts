import {Visitor} from "./Visitor";
import {CompoundShape} from "./CompoundShape";
import {Rectangle} from "./Rectangle";
import {Circle} from "./Circle";
import {Dot} from "./Dot";

// Concrete visitors implement several versions of the same
// algorithm, which can work with all concrete component
// classes.
//
// You can experience the biggest benefit of the Visitor pattern
// when using it with a complex object structure such as a
// Composite tree. In this case, it might be helpful to store
// some intermediate state of the algorithm while executing the
// visitor's methods over various objects of the structure.
export class XMLExportVisitor implements Visitor {
    visitCompoundShape(cs: CompoundShape) {
        // Export the dot's ID and center coordinates.
    }

    visitRectangle(r: Rectangle) {
        // Export the circle's ID, center coordinates and
        // radius.
    }

    visitCircle(c: Circle) {
        // Export the rectangle's ID, left-top coordinates,
        // width and height.
    }

    visitDot(d: Dot) {
        // Export the shape's ID as well as the list of its
        // children's IDs.
    }
}