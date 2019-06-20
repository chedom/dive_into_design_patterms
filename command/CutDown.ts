import {Command} from "./Command";

export class CutDown extends Command {
    // The cut command does change the editor's state, therefore
    // it must be saved to the history. And it'll be saved as
    // long as the method returns true.
    execute(): boolean {
        this.saveBackup();
        this.app.clipboard = this.editor.getSelection();
        this.editor.deleteSelection();
        return true;
    }
}