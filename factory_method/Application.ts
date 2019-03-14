import {Dialog} from "./Dialog";
import {WindowsDialog} from "./WindowsDialog";
import {WebDialog} from "./WebDialog";

type Config = { OS: string };


class Application {
    dialog: Dialog;

    initialize(config: Config) {
        if (config.OS === "Windows") {
            this.dialog = new WindowsDialog();
        } else if (config.OS === "Web") {
            this.dialog = new WebDialog();
        }
    }

    main() {
        this.initialize({OS: "Windows"});
        this.dialog.render();
    }
}
