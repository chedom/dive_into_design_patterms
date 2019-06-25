import {EventListener} from './EventListener';

export class EventManager {
    // @ts-ignore
    private listeners: Map<string, EventListener[]>;

    subscribe(eventType: string, listener: EventListener) {
        const list = this.listeners.get(eventType);
        list.push(listener);
    }

    unsubscribe(eventType: string, listener: EventListener) {
        let list = this.listeners.get(eventType);
        if (list) {
            list = list.filter(l => l !== listener);
        }
        if (list.length === 0) {
            this.listeners.delete(eventType);
        }
    }

    notify(eventType: string, data: any) {
        const list = this.listeners.get(eventType);
        if (list) {
            list.forEach(l => l.update(data));
        }
    }
}