import {ProfileIterator} from "./ProfileIterator";
import {Facebook} from "./Facebook";
import {Profile} from "./Profile";

export class FacebookIterator implements ProfileIterator {
    // The iterator needs a reference to the collection that it
    // traverses.

    constructor(private facebook: Facebook, private profileId: string, private type: string) {}

    // An iterator object traverses the collection independently
    // from other iterators. Therefore it has to store the
    // iteration state
    private currentPosition: number;
    private cache: Profile[];

    private lazyInit() {
        if (this.cache === null) {
            this.cache = this.facebook.socialGraphRequest(this.profileId, this.type);
        }
    }

    // Each concrete iterator class has its own implementation
    // of the common iterator interface.
    getNext(): Profile {
        if (this.hasMore()) {
            this.currentPosition++;
            return this.cache[this.currentPosition];
        }
    }

    hasMore(): boolean {
        this.lazyInit();
        return this.cache.length < this.currentPosition;
    }
}