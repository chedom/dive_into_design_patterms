import {Command} from "./Command";

export class PasteCommand extends Command {
    execute(): boolean {
        this.saveBackup();
        this.editor.replaceSelection(this.app.clipboard);
        return true;
    }
}