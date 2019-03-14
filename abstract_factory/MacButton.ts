import {IButton} from "./Button";

export class MacButton implements IButton {
    paint(): void {
        console.log("MacButton");
    }
}
