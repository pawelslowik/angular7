import { Todo } from './todo';

export class TodoIdWrapper extends Todo {
    constructor(public id: string, todo: Todo) {
        super(todo.title, todo.description, todo.endDate, todo.status);
    }
}
