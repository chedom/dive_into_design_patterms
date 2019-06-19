// The application can configure proxies on the fly.
import {ThirdPartyYoutubeClass} from "./ThirdPartyYoutubeClass";
import {CachedYoutubeClass} from "./CachedYoutubeClass";
import {YoutubeManager} from "./YoutubeManager";

export class Application {
    init() {
        const aYoutubeService = new ThirdPartyYoutubeClass();
        const aYoutubeProxy = new CachedYoutubeClass(aYoutubeService);
        const manager = new YoutubeManager(aYoutubeProxy);
        manager.reactOnUserInput("some_video");
    }
}