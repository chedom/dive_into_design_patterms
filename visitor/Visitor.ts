import { Dot } from "./Dot";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";
import { CompoundShape } from "./CompoundShape";

export interface Visitor {
    visitDot(d: Dot)
    visitCircle(c: Circle)
    visitRectangle(r: Rectangle)
    visitCompoundShape(cs: CompoundShape)
}