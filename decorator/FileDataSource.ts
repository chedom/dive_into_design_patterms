import {DataSource} from "./DataSource";

export class FileDataSource implements DataSource {

    constructor(private filename: string) {}

    writeData(data: string) {
        console.log(`Write data to ${this.filename}`);
    }

    readData(): string {
        return `Some data from ${this.filename}`;
    }
}
