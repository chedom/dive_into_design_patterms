import {IButton} from "./Button";

export abstract class Dialog {
    abstract createButton(): IButton

    // some other logic of class
    render() {
        const okButton: IButton = this.createButton();
        okButton.render()
    }
}
