import {DataSource} from "./DataSource";

export class DataSourceDecorator implements DataSource {
    protected wrappee : DataSource;

    constructor(source: DataSource) {
        this.wrappee = source;
    }

    writeData(data: string) {
        this.wrappee.writeData(data);
    }

    readData(): string {
        return this.wrappee.readData();
    }
}
