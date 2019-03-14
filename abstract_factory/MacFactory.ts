import {GUIFactory} from "./GUIFactory";
import {IButton} from "./Button";
import {MacButton} from "./MacButton";
import {ICheckbox} from "./Checkbox";
import {MacCheckbox} from "./MacCheckbox";

export class MacFactory implements GUIFactory {
    createButton(): IButton {
        return new MacButton();
    }

    createCheckbox(): ICheckbox {
        return new MacCheckbox();
    }
}
