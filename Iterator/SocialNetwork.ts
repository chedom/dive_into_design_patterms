import {ProfileIterator} from "./ProfileIterator";

export interface SocialNetwork {
    createFriendsIterator(profileId: string): ProfileIterator;
    createCoworkersIterator(profileId: string): ProfileIterator;
}