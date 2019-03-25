import {Graphic} from "./Graphic";

export class CompoundGraphic implements Graphic {
    private children: Graphic[];

    public add(child: Graphic) {
        this.children.push(child);
    }

    public remove(child: Graphic) {
        this.children.filter(item => item != child);
    }

    move(x: number, y: number) {
        this.children.forEach(child => child.move(x, y));
    }

    draw() {
        this.children.forEach(child => child.draw());
    }
}
