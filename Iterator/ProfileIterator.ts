import {Profile} from "./Profile";

export interface ProfileIterator {
    getNext(): Profile;
    hasMore(): boolean;
}