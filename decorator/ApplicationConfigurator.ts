import {FileDataSource} from "./FileDataSource";
import {EncryptionDecorator} from "./EncryptionDecorator";
import {CompressionDecorator} from "./CompressionDecorator";
import {SalaryManager} from "./SalaryManager";
import {DataSource} from "./DataSource";

type Opts = {
    enabledEncryption: boolean;
    enabledCompression: boolean;
}

export class ApplicationConfigurator {
    configure(opts: Opts) {
        let source: DataSource = new FileDataSource('salary.dat');

        if (opts.enabledEncryption) {
            source = new EncryptionDecorator(source)
        }

        if (opts.enabledCompression) {
            source = new CompressionDecorator(source);
        }

        const logger = new SalaryManager(source);
        const salary = logger.load();
    }
}
