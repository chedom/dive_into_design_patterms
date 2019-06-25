import {State} from "./State";
import {AudioPlayer} from "./AudioPlayer";
import {LockedState} from "./LockedState";
import {PlayingState} from "./PlayingState";

export class ReadyState extends State {
    constructor(player: AudioPlayer) {
        super(player);
    }

    clickLock() {
        this.player.changeState(new LockedState(this.player));
    }

    clickPlay() {
        this.player.startPlayback();
        this.player.changeState(new PlayingState(this.player));
    }

    clickNext() {
        this.player.nextSong();
    }

    clickPrevious() {
        this.player.clickPrevious();
    }
}