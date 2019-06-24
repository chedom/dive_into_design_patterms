import {SocialNetwork} from "./SocialNetwork";
import {ProfileIterator} from "./ProfileIterator";
import {FacebookIterator} from "./FacebookIterator";
import {Profile} from "./Profile";

export class Facebook implements SocialNetwork {
    // ... The bulk of the collection's code should go here ...
    // Iterator creation code.
    createFriendsIterator(profileId: string): ProfileIterator {
        return new FacebookIterator(this, profileId, "friends");
    }

    createCoworkersIterator(profileId: string): ProfileIterator {
        return new FacebookIterator(this, profileId, "coworkers");
    }

    socialGraphRequest(profileId: string, type: string): Profile[] {
        return [];
    }
}