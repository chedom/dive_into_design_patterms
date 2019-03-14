import {IButton} from "./Button";

export class HTMLButton implements IButton {

    onClick(): void {
        console.log('onclick HTMLButton');
    }

    render(): void {
        console.log('render HTMLButton');
    }
}
