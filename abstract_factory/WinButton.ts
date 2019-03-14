import {IButton} from "./Button";

export class WinButton implements IButton {
    paint(): void {
        console.log("WinButton");
    }
}
