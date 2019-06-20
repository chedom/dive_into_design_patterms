import {Command} from "./Command";

export class UndoCommand extends Command {
    execute(): boolean {
        this.app.undo();
        return false;
    }
}