// An application can configure publishers and subscribers at
// runtime.
import {Editor} from "./Editor";
import {LogginListener} from "./LogginListener";
import {EmailAlertsListener} from "./EmailAlertsListener";

class Application {
    config() {
        const editor = new Editor();
        const logger = new LogginListener(
            "/path/to/log.txt",
            "Someone has opened the file: "
        );

        editor.events.subscribe("open", logger);

        const emailAlerts = new EmailAlertsListener(
            "admin@example.com",
            "Someone has changed the file: "
        );

        editor.events.subscribe("save", emailAlerts);

    }
}