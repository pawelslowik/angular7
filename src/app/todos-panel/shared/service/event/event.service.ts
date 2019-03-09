import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { TodoActionEvent, EventType } from './todo-action-event';
import { Todo } from '../../model/todo';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private events: Subject<TodoActionEvent> = new Subject<TodoActionEvent>();
  public events$: Observable<TodoActionEvent>;

  constructor() {
    this.events$ = this.events.asObservable();
   }

  refreshTodos() {
    this.events.next(new TodoActionEvent(EventType.REFRESH));
  }

  refreshTodosError() {
    this.events.next(new TodoActionEvent(EventType.REFRESH_ERROR));
  }

  addTodo() {
    this.events.next(new TodoActionEvent(EventType.ADD));
  }

  addTodoError(todo: Todo) {
    this.events.next(new TodoActionEvent(EventType.ADD_ERROR, todo));
  }

  addTodoSuccess(todo: Todo) {
    this.events.next(new TodoActionEvent(EventType.ADD_SUCCESS, todo));
  }

  addTodoCancel() {
    this.events.next(new TodoActionEvent(EventType.ADD_CANCEL));
  }

  selectTodo(todo: Todo) {
    this.events.next(new TodoActionEvent(EventType.SELECT, todo));
  }

  editTodo(todo: Todo) {
    this.events.next(new TodoActionEvent(EventType.EDIT, todo));
  }

  editTodoCancel(todo: Todo) {
    this.events.next(new TodoActionEvent(EventType.EDIT_CANCEL, todo));
  }

  editTodoError(todo: Todo) {
    this.events.next(new TodoActionEvent(EventType.EDIT_ERROR, todo));
  }

  editTodoSuccess(todo: Todo) {
    this.events.next(new TodoActionEvent(EventType.EDIT_SUCCESS, todo));
  }

  deleteTodoError(todo: Todo) {
    this.events.next(new TodoActionEvent(EventType.DELETE_ERROR, todo));
  }

  deleteTodoSuccess(todo: Todo) {
    this.events.next(new TodoActionEvent(EventType.DELETE_SUCCESS, todo));
  }
}
