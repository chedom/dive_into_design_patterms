import {VideoConverter} from "./VideoConverter";

class Application {
    main() {
        const convertor = new VideoConverter()
        const mp4: any = convertor.convert("youtubevideo.ogg", "mp4")
        mp4.save()
    }
}