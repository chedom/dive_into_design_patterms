// A command object can act as a caretaker. In that case, the
// command gets a memento just before it changes the
// originator's state. When undo is requested, it restores the
// originator's state from a memento.
import {Snapshot} from "./Snapshot";
import {Editor} from "./Editor";

export class Command {
    private backup: Snapshot;

    constructor(private editor: Editor) {}

    makeBackup() {
        this.backup = this.editor.createSnapshot();
    }

    undo() {
        if (this.backup !== null) {
            this.backup.restore();
        }
    }
}