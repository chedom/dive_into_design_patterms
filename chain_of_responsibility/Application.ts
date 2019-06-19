import {Dialog} from "./Dialog";
import {Panel} from "./Panel";
import {Button} from "./Button";
import {Component} from "./Component";

class Application {
    createUI(): any {
        const dialog = new Dialog("Budget Reports");
        const panel = new Panel("This panel does ...")
        const ok = new Button();
        ok.tooltipText = "This is an OK"

        panel.add(ok)
        dialog.add(panel)
    }

    onF1KeyPress(c: Component) {
        c.showHelp();
    }
}