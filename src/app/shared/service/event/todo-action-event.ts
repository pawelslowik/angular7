import { Todo } from '../../model/todo';

export enum EventType {
    ADD,
    REFRESH,
    SELECT,
    EDIT
}

export class TodoActionEvent {
    constructor(public eventType: EventType, public payload: Todo = null) {}
}
