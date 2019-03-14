import {IButton} from "./Button";
import {ICheckbox} from "./Checkbox";

export interface GUIFactory {
    createButton(): IButton
    createCheckbox(): ICheckbox
}
