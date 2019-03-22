import {RemoteControl} from "./RemoteControl";

export class AdvancedRemoteControl extends RemoteControl {
    mute() {
        this.device.setVolume(0);
    }
}
