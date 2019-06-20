// The application class sets up object relations. It acts as a
// sender: when something needs to be done, it creates a command
// object and executes it.
import {Editor} from "./Editor";
import {CommandHistory} from "./CommandHistory";
import {Command} from "./Command";
import {CutDown} from "./CutDown";
import {CopyCommand} from "./CopyCommand";
import {UndoCommand} from "./UndoCommand";

export class Application {
    public clipboard: string;
    private editors: Editor[];
    private activeEditor: Editor;
    private history: CommandHistory;

    executeCommand(command: Command) {
        if (command.execute()) {
            this.history.push(command);
        }
    }

    // Take the most recent command from the history and run its
    // undo method. Note that we don't know the class of that
    // command. But we don't have to, since the command knows
    // how to undo its own action.
    undo() {
        const command = this.history.pop();
        if (command != null) {
            command.undo();
        }
    }

    // The code which assigns commands to UI objects may look
    // like this.
    createUI() {
        const copy = () => {
            this.executeCommand(new CopyCommand(this, this.activeEditor));
        };

        copyButton.setCommand(copy);
        shortcuts.onKeyPress("Ctrl+C", copy);

        const cut = () => {
            this.executeCommand(new CutDown(this, this.activeEditor));
        };

        cutButton.setCommand(cut);
        shortcuts.onKeyPress("Ctrl+X", cut);

        const undo = () => {
            this.executeCommand(new UndoCommand(this, this.activeEditor));
        };

        undoButton.setCommand(undo);
        shourtcuts.OnKeyPress("Ctrl+Z", undo);
    }
}