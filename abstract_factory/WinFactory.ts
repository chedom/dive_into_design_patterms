import {GUIFactory} from "./GUIFactory";
import { IButton } from "./Button";
import {WinButton} from "./WinButton";
import {ICheckbox} from "./Checkbox";
import {WinCheckbox} from "./WinCheckbox";

export class WinFactory implements GUIFactory {
    createButton(): IButton {
        return new WinButton();
    }

    createCheckbox(): ICheckbox {
        return new WinCheckbox();
    }
}
