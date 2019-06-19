import {TreeType} from "./TreeType";

export class TreeFactory {
    // @ts-ignore
    private treeTypes: Map<string, TreeType>;

    getTreeType(name, color, texture: string): TreeType {
        const key = [name, color, texture].join(":");
        let type = this.treeTypes.get(key);
        if (!type) {
            type = new TreeType(name, color, texture);
            this.treeTypes.set(key, type);
        }
        return type;
    }
}