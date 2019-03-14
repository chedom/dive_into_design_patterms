import {Shape} from "./Shape";

export class Rectangle extends Shape {
    public width: number;
    public height: number;

    constructor(source?: Rectangle) {
        if (source) {
            super(source);
            this.height = source.height;
            this.width = source.width;
        } else {
            super();
        }
    }

    clone(): Shape {
        return new Rectangle(this);
    }
}
