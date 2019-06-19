import {Component} from "./Component";

export abstract class Container extends Component {
    protected children: Component[];

    add(child: Component) {
        this.children.push(child);
        child.container = this;
    }
}