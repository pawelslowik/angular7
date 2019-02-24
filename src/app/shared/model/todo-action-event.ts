export enum EventType {
    ADD,
    REFRESH
}

export class TodoActionEvent {
    constructor(public eventType: EventType) {}
}
