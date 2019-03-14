import {Shape} from "./Shape";

export class Circle extends Shape {
    public radius: number;
    constructor(source?: Circle) {
        if (source) {
            super(source);
            this.radius = source.radius;
        } else {
            super();
        }
    }

    clone(): Shape {
        return new Circle(this);
    }
}
