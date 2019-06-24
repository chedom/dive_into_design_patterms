import {Mediator} from "./Mediator";

export class Component {
    constructor(protected dialog: Mediator) { }

    click() {
        this.dialog.notify(this, "click")
    }

    keypress() {
        this.dialog.notify(this, "keypress")
    }
}