import {Mediator} from "./Mediator";
import {Checkbox, Textbox, Button} from "./Impl";
import {Component} from "./Component";

export class AuthenticationDialog implements Mediator {
    private title: string;
    private  loginOrCreateChkBx: Checkbox;
    private loginUsername: Textbox;
    private loginPassword: Textbox;
    private registrationUsernamen: Textbox;
    private registrationPassword: Textbox;
    private registrationEmail: Textbox;
    private okButton: Button;
    private cancelButton: Button;

    constructor() {
        // Create all component objects and pass the current
        // mediator into their constructors to establish links
    }


    // When something happens with a component, it notifies the
    // mediator. Upon receiving a notification, the mediator may
    // do something on its own or pass the request to another
    // component.
    notify(sender: Component, event: string) {
        if (sender === this.loginOrCreateChkBx && event === "check") {
            this.title = "Log in"
            // 1. Show login form components.
            // 2. Hide registration form components.
        } else {
            this.title = "Registration"
            // 1. Show registration form components.
            // 2. Hide login form components
        }

        if (sender === this.okButton && event === "click") {
            const checked = this.loginOrCreateChkBx.check();
            // Try to find a user using login credentials.
            if (checked) {
                // Show an error message above the login
                // field.
            } else {
                // 1. Create a user account using data from the
                // registration fields.
                // 2. Log that user in.
                // ...
            }
        }
    }

}