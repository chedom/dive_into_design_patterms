// The concrete commands go here.
import {Command} from "./Command";

export class CopyCommand extends Command {
    // The copy command isn't saved to the history since it
    // doesn't change the editor's state.
    execute(): boolean {
        this.app.clipboard = this.editor.getSelection();
        return false;
    }
}