import {Component} from "./Component";

export class Button extends Component {}

export class Textbox extends Component {}

export class Checkbox extends Component {
    check(): boolean {
        this.dialog.notify(this, "check")
        return true;
    }
}