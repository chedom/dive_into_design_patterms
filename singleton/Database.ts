export class Database {
    private static instance: Database;

    private constructor() {}

    static getInstance(): Database {
        // here can be lock for thread safety
        if (this.instance === null) {
            this.instance = new Database();
        }
        return this.instance;
    }

    public query(sql: string) {}

}
