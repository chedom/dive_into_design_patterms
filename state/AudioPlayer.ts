import {State} from "./State";
import {ReadyState} from "./ReadyState";

export class AudioPlayer {
    private state: State;
    public playing: boolean;
    public currentSong: string;

    constructor() {
        this.state = new ReadyState(this);
    }

    // Other objects must be able to switch the audio player's
    // active state.
    changeState(state: State) {
        this.state = state;
    }

    // UI methods delegate execution to the active state.
    clickLock() {
        this.state.clickLock();
    }

    clickPlay() {
        this.state.clickPlay();
    }

    clickNext() {
        this.state.clickNext();
    }

    clickPrevious() {
        this.state.clickPrevious();
    }

    // A state may call some service methods on the context.
    startPlayback() {}
    stopPlayback() {}
    nextSong() {}
    fastForward(n: number) {}
}