import {EventListener} from './EventListener';

class EmailSender {
    send(email: string, text: string) { }
}

export class EmailAlertsListener implements EventListener {
    private emailSender: EmailSender;
    private email: string;
    private message: string;


    constructor(email: string, message: string) {
        this.emailSender = new EmailSender();
    }

    update(filename: string) {
        const text = [this.message, filename].join(": ");
        this.emailSender.send(this.email, text);
    }

}