import {Device} from "./Device";

export class Radio implements Device {
    isEnabled(): boolean {return true; };
    enable() {};
    disable(){};
    getVolume(): number { return 1; };
    setVolume(percent: number) { };
    getChannel(): number { return 1;};
    setChannel(channel: number) { return 1; }
}
