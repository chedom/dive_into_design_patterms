import {ThirdPartyYoutubeLib} from "./ThirdPartyYoutubeLib";

export class YoutubeManager {
    constructor(private service: ThirdPartyYoutubeLib) {}

    renderVideoPage(id: string) {
        const info = this.service.getVideoInfo(id);
        // Render the video page.
    }

    renderListPanel() {
        const list = this.service.listVideos();
        // Render the list of video thumbnails.
    }

    reactOnUserInput(id: string) {
        this.renderVideoPage(id);
        this.renderListPanel()
    }
}