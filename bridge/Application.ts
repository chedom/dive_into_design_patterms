import {Tv} from "./Tv";
import {RemoteControl} from "./RemoteControl";
import {Radio} from "./Radio";
import {AdvancedRemoteControl} from "./AdvancedRemoteControl";

export class Application {
    main() {
        const tv = new Tv();
        let remote = new RemoteControl(tv);

        remote.togglePower();
        remote.channelUp();
        remote.togglePower();

        const radio = new Radio();
        remote = new AdvancedRemoteControl(radio);

        remote.togglePower();
        remote.channelDown();
        remote.togglePower();
    }
}
