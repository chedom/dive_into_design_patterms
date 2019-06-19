// But complex components may override the default
// implementation. If the help text can't be provided in a new
// way, the component can always call the base implementation
// (see Component class).
import {Container} from "./Container";

export class  Panel extends Container {
    constructor(private modalHelpText: string) {
        super();
    }

    showHelp() {
        if (this.modalHelpText != null) {
            // Show a modal with help text
        } else {
            super.showHelp();
        }
    }
}