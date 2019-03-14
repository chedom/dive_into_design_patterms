import {Shape} from "./Shape";
import {Circle} from "./Circle";
import {Rectangle} from "./Rectangle";

export class Application {
    private shapes: Shape[];

    constructor() {
        const circle = new Circle();
        circle.radius = 10;
        this.shapes.push(circle);
        const anotherCircle = circle.clone();
        this.shapes.push(anotherCircle);

        const rectangle = new Rectangle();
        rectangle.width = 10;
        rectangle.height = 20;
        this.shapes.push(rectangle);
        this.shapes.push(rectangle.clone());
    }
}
