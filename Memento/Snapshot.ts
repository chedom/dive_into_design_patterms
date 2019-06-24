// The memento class stores the past state of the editor.
import {Editor} from "./Editor";

export class Snapshot {
    constructor(
        private editor: Editor,
        private text: string,
        private curX: number,
        private curY: number,
        private selectionWidth: number,
    ) {}

    // At some point, a previous state of the editor can be
    // restored using a memento object.

    restore() {
        this.editor.setText(this.text);
        this.editor.setCursor(this.curX, this.curY);
        this.editor.setSelectionWidth(this.selectionWidth);
    }
}