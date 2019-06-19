import {Tree} from "./Tree";
import {TreeFactory} from "./TreeFactory";
import {Canvas} from "./Canvas";

export class Forest {
    private trees: Tree[];
    constructor(private treeFactory: TreeFactory) {
        this.trees = [];
    }

    plantTree(x: number, y: number, name: string, color: string, texture: string) {
        const type = this.treeFactory.getTreeType(name, color, texture);
        const tree = new Tree(x, y, type);
        this.trees.push(tree);
    }

    draw(canvas: Canvas) {
        this.trees.forEach(t => t.draw(canvas));
    }
}