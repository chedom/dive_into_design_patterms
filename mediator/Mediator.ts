import {Component} from "./Component";

export interface Mediator {
    notify(sender: Component, event: string)
}