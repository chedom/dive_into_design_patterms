import {Application} from "./Application";
import {Editor} from "./Editor";


// The base command class defines the common interface for all
// concrete commands.

export abstract class Command {
    protected app: Application;
    protected editor: Editor;
    protected backup: string;

    constructor(app: Application, editor: Editor) {
        this.app = app;
        this.editor = editor;
    }

    // Make a backup of the editor's state.
    saveBackup() {
        this.backup = this.editor.text;
    }

    // Restore the editor's state.
    undo() {
        this.editor.text = this.backup;
    }

    // The execution method is declared abstract to force all
    // concrete commands to provide their own implementations.
    // The method must return true or false depending on whether
    // the command changes the editor's state.
    abstract execute(): boolean;
}

