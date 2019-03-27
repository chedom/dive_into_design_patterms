import {FileDataSource} from "./FileDataSource";
import {CompressionDecorator} from "./CompressionDecorator";
import {DataSource} from "./DataSource";
import {EncryptionDecorator} from "./EncryptionDecorator";

export class Application {
    main() {
        const records = 'Some information';
        let source: DataSource = new FileDataSource('somefile.dat');
        source.writeData(records);
        // The target file has been written with plain data.

        source = new CompressionDecorator(source);
        source.writeData(records);
        // The target file has been written with compressed
        // data.

        source = new EncryptionDecorator(source);
        // The source variable now contains this:
        // Encryption > Compression > FileDataSource
        source.writeData(records);
        // The file has been written with compressed and
        // encrypted data.
    }
}
