import {ProfileIterator} from "./ProfileIterator";

export class SocialSpammer {
    send(iterator: ProfileIterator, message: string) {
        while (iterator.hasMore()) {
            const profile = iterator.getNext();
            // send email to profile
        }
    }
}