export interface DataSource {
    writeData(data: string);
    readData(): string;
}
