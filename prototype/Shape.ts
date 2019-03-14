export abstract class Shape {
    public x: number;
    public y: number;
    public color: string;

    // a regular constructor
    constructor(source?: Shape) {
        if (source) {
            this.color = source.color;
            this.x = source.x;
            this.y = source.y;
        }
    }

    abstract clone(): Shape
}
