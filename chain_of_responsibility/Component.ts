// The base class for simple components.
import {ComponentWithContextualHelp} from "./ComponentWithContextualHelp";
import {Container} from "./Container";

export abstract class Component implements  ComponentWithContextualHelp {
    public tooltipText: string;

    // The Component's container acts as the next link in the chain of handlers
    protected container: Container;

    // The component shows a tooltip if there's help text
    // assigned to it. Otherwise it forwards the call to the
    // container, if it exists.
    showHelp() {
        if (this.tooltipText !== "") {
            // Show tooltip
        } else {
            this.container.showHelp()
        }
    }
}