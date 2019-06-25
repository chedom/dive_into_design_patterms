import {AudioPlayer} from "./AudioPlayer";

export abstract class State {
    // Context passes itself through the state constructor. This
    // may help a state fetch some useful context data if it's
    // needed.
    constructor(protected player: AudioPlayer) {}

    abstract clickLock();
    abstract clickPlay();
    abstract clickNext();
    abstract clickPrevious();
}