import {Dialog} from "./Dialog";
import {IButton} from "./Button";
import {WindowsButton} from "./WindowsButton";

export class WindowsDialog extends Dialog {
    createButton(): IButton {
        return new WindowsButton();
    }
}
