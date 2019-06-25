import {State} from "./State";
import {AudioPlayer} from "./AudioPlayer";
import {PlayingState} from "./PlayingState";

export class LockedState extends State {
    constructor(player: AudioPlayer) {
        super(player);
    }

    // When you unlock a locked player, it may assume one of two
    // states.
    clickLock() {
        if (this.player.playing) {
            this.player.changeState(new PlayingState(this.player));
        }
    }

    clickPrevious() {
        // Locked, so do nothing
    }

    clickNext() {
        // Locked, so do nothing
    }

    clickPlay() {
        // Locked, so do nothing
    }
}