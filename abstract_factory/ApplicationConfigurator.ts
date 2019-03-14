import {GUIFactory} from "./GUIFactory";
import {WinFactory} from "./WinFactory";
import {MacFactory} from "./MacFactory";
import { Application } from "./Application";

class ApplicationConfigurator {
    main(args: string[]) {
        let factory: GUIFactory;

        const os = args[0];

        if (os === "Windows") {
            factory = new WinFactory();
        } else if (os === "Mac") {
            factory = new MacFactory();
        } else {
            throw new Error("Error! Unknown operating system.")
        }

        const app: Application = new Application(factory);
        app.paint()
    }
}
