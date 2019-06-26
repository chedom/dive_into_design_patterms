
// The client code can run visitor operations over any set of
// elements without figuring out their concrete classes. The
// accept operation directs a call to the appropriate operation
// in the visitor object.
import {Shape} from "./Shape";
import {XMLExportVisitor} from "./XMLExportVisitor";

export class Application {
    private allShapes: Shape[];

    export() {
        const exportVisitor = new XMLExportVisitor();
        this.allShapes.forEach(s => s.accept(exportVisitor));
    }
}