// The application class configures collections and iterators
// and then passes them to the client code.
import {SocialNetwork} from "./SocialNetwork";
import {SocialSpammer} from "./SocialSpammer";
import {Facebook} from "./Facebook";
import {Profile} from "./Profile";

export class Application {
    private network: SocialNetwork;
    private spammer: SocialSpammer;

    config(social: string) {
        if (social === "facebook") {
            this.network = new Facebook();
        }
        // here can be other social network classes
        this.spammer = new SocialSpammer();
    }

    sendSpamToFriends(profile: Profile) {
        const iterator = this.network.createFriendsIterator(profile.getId());
        this.spammer.send(iterator, "Very important message#1");
    }

    sendSpamToCoworkers(profile: Profile) {
        const iterator = this.network.createCoworkersIterator(profile.getId());
        this.spammer.send(iterator, "Very important message#2")
    }
}