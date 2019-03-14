import {Dialog} from "./Dialog";
import {IButton} from "./Button";
import {HTMLButton} from "./HTMLButton";

export class WebDialog extends Dialog {
    createButton(): IButton {
        return new HTMLButton();
    }
}
