import {IButton} from "./Button";

export class WindowsButton implements IButton {
    onClick(): void {
        console.log('onclick WindowsButton');
    }

    render(): void {
        console.log('render WindowsButton');
    }
}
