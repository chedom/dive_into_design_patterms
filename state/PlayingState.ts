import {State} from "./State";
import {AudioPlayer} from "./AudioPlayer";
import {ReadyState} from "./ReadyState";
import {LockedState} from "./LockedState";

export class PlayingState extends State {
    constructor(player: AudioPlayer) {
        super(player);
    }

    clickPlay() {
        this.player.startPlayback();
        this.player.changeState(new ReadyState(this.player));
    }

    clickLock() {
        this.player.changeState(new LockedState(this.player));
    }

    clickNext() {
        this.player.nextSong();
    }

    clickPrevious() {
        this.player.clickPrevious()
    }
}