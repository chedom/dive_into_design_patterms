import {Database} from "./Database";

export class Application {
    main() {
        const foo = Database.getInstance();
        foo.query("SELECT ...");

        const bar = Database.getInstance();
        bar.query("SELECT ...")
    }
}
