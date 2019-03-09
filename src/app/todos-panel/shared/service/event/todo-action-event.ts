import { Todo } from '../../model/todo';

export enum EventType {
    ADD,
    REFRESH,
    SELECT,
    EDIT,
    REFRESH_ERROR,
    ADD_ERROR,
    ADD_SUCCESS,
    ADD_CANCEL,
    EDIT_ERROR,
    EDIT_SUCCESS,
    EDIT_CANCEL,
    DELETE_SUCCESS,
    DELETE_ERROR
}

export class TodoActionEvent {
    constructor(public eventType: EventType, public payload: Todo = null) {}
}
