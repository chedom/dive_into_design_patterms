// The originator holds some important data that may change over
// time. It also defines a method for saving its state inside a
// memento and another method for restoring the state from it.
import {Snapshot} from "./Snapshot";

export class Editor {
    constructor(
        private text: string,
        private curX: number,
        private curY: number,
        private selectionWidth: number,
    ) {}

    setText(text: string) {
        this.text = text;
    }

    setCursor(x: number, y: number) {
        this.curX = x;
        this.curY = y;
    }

    setSelectionWidth(width: number) {
        this.selectionWidth = width;
    }

    // Saves the current state inside a memento.
    createSnapshot(): Snapshot {
        return new Snapshot(this, this.text, this.curX, this.curY, this.selectionWidth);
    }
}