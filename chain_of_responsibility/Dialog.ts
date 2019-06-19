import {Container} from "./Container";

export class Dialog extends Container {
    constructor(private wikiPageUrl: string) {
        super()
    }

    showHelp() {
        if (this.wikiPageUrl != null) {
            // Open the wiki help page.
        } else {
            super.showHelp()
        }
    }
}