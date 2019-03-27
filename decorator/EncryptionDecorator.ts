import {DataSourceDecorator} from "./DataSourceDecorator";
import {DataSource} from "./DataSource";

export class EncryptionDecorator extends DataSourceDecorator {

    constructor(source: DataSource) {
        super(source);
    }

    writeData(data: string) {
        const res = 'encrypt data';
        console.log('encrypt data');
        super.writeData(res);
    }

    readData(): string {
        const res = super.readData();
        console.log('decrypt data');
        return `${res} decrypt data`;
    }

}
