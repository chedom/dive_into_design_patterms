import {EventListener} from './EventListener';

class Logger {
    constructor(private logFilename: string) {}
    write(...data: string[]) {}
}

export class LogginListener implements EventListener{
    private log: Logger;
    private message: string;

    constructor(logFilename: string, message: string) {
        this.log = new Logger(logFilename);
        this.message = message;
    }

    update(filename: string) {
        this.log.write(this.message, filename);
    }

}