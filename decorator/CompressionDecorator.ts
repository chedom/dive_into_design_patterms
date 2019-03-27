import {DataSourceDecorator} from "./DataSourceDecorator";
import {DataSource} from "./DataSource";

export class CompressionDecorator extends DataSourceDecorator {

    constructor(source: DataSource) {
        super(source);
    }

    writeData(data: string) {
        const compressed = `compressed: ${data}`;
        super.writeData(compressed);
    }

    readData(): string {
        const compressed = super.readData();
        return `decompressed ${compressed}`;
    }
}
