import {ThirdPartyYoutubeLib} from "./ThirdPartyYoutubeLib";
import {ThirdPartyYoutubeClass} from "./ThirdPartyYoutubeClass";

export class CachedYoutubeClass implements ThirdPartyYoutubeLib {
    private service: ThirdPartyYoutubeClass;
    private listCache: any;
    private videoCache: any;
    public needReset: boolean;

    constructor(service: ThirdPartyYoutubeClass) {
        this.service = service;
    }

    listVideos(): any {
        if (this.listCache == null || this.needReset) {
            this.listCache = this.service.listVideos();
        }
        return this.listCache;
    }

    getVideoInfo(id: string): any {
        if (this.videoCache == null || this.needReset) {
            this.videoCache = this.service.getVideoInfo(id);
        }

        return this.videoCache;
    }

    downloadVideo(id: string): any {
        if (!this.downloadExists(id) || this.needReset) {
            this.service.downloadVideo(id);
        }
    }

    private downloadExists(id: string): boolean {
        return true
    }
}