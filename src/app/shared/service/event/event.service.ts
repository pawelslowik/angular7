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

  addTodo() {
    this.events.next(new TodoActionEvent(EventType.ADD));
  }

  selectTodo(todo: Todo) {
    this.events.next(new TodoActionEvent(EventType.SELECT, todo));
  }
}
