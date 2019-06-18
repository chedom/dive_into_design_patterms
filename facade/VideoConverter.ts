import {
    AudioMixer,
    BitrateReader,
    CodecFactory,
    MPEG4CompressionCodec,
    OggCompressionCodec,
    VideoFile
} from "./OtherSystem";

class File {
    constructor(result: any) {}
}

export class VideoConverter {
    convert(filename: string, format: string): File {
        const file = new VideoFile(filename);
        let destinationCodec;
        const sourceCodec = new CodecFactory.extract(file);
        if (format === "mp4") {
            destinationCodec = new MPEG4CompressionCodec()
        } else {
            destinationCodec = new OggCompressionCodec()
        }
        const buffer = BitrateReader.read(filename, sourceCodec)
        let result = BitrateReader.convert(buffer, destinationCodec)
        result = (new AudioMixer()).fix(result)
        return new File(result)
    }
}