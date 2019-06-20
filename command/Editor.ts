// The editor class has actual text editing operations. It plays
// the role of a receiver: all commands end up delegating
// execution to the editor's methods.
export class Editor {
    constructor(public text: string) {}

    getSelection(): string {
        return "copy";
    }

    deleteSelection() {}

    replaceSelection(s: string) {}
}