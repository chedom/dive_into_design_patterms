import {IButton} from "./Button";
import {GUIFactory} from "./GUIFactory";
import {ICheckbox} from "./Checkbox";

export class Application {
    private factory: GUIFactory;

    private checkbox: ICheckbox;
    private button: IButton;


    constructor(factory: GUIFactory) {
        this.factory = factory;
        this.createUI();
    }

    createUI() {
        this.button = this.factory.createButton();
        this.checkbox = this.factory.createCheckbox();
    }

    paint() {
        this.button.paint();
    }
}
