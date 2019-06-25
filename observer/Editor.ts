import {EventManager} from "./EventManager";

export class Editor {
    public events: EventManager;
    private file: File;

    constructor() {
        this.events = new EventManager();
    }

    // Methods of business logic can notify subscribers about
    // changes.

    openFile(fileBits: BlobPart[], name: string) {
        this.file = new File(fileBits, name);
        this.events.notify("open", this.file.name);
    }

    saveFile() {
        (this.file as any).write();
        this.events.notify("save", this.file.name);
    }
}