import {DataSource} from "./DataSource";

const records = 'Some information';

export class SalaryManager {
    constructor(private source: DataSource) {}

    load(): string {
        return this.source.readData();
    }

    save() {
        this.source.writeData(records);
    }
}
