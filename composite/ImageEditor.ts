import {CompoundGraphic} from "./CompoundGraphic";
import {Dot} from "./Dot";
import {Circle} from "./Circle";
import {Graphic} from "./Graphic";

export class ImageEditor {
    private all: CompoundGraphic;

    public load() {
        const all = new CompoundGraphic();

        all.add(new Dot(1, 2));
        all.add(new Circle(5, 3, 10));
    }

    public groupSelected(components: Graphic[]) {
        const group = new CompoundGraphic();
        components.forEach(item => group.add(item));
        this.all.add(group);
        this.all.draw();
    }
}
