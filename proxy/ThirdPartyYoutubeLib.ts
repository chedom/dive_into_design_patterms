export interface ThirdPartyYoutubeLib {
    listVideos(): any
    getVideoInfo(id: string): any
    downloadVideo(id: string): any
}