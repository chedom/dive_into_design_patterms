export interface Device {
    isEnabled(): boolean;
    enable();
    disable();
    getVolume(): number;
    setVolume(percent: number);
    getChannel(): number;
    setChannel(channel: number)
}
