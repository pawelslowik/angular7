import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../shared/model/todo';
import { EventService } from '../shared/service/event/event.service';
import { EventType } from '../shared/service/event/todo-action-event';
import { HttpService } from '../shared/service/http/http.service';
import { TodoIdWrapper } from '../shared/model/todo-id-wrapper';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todo: Todo;
  private handledEvent: EventType;

  constructor(private httpService: HttpService, private eventService: EventService) { }

  ngOnInit() {
    this.eventService.events$.subscribe(event => {
      this.handledEvent = event.eventType;
      if (event.eventType === EventType.ADD) {
        this.todo = new Todo();
      }
      if (event.eventType === EventType.SELECT || event.eventType === EventType.EDIT) {
        this.todo = event.payload;
      }
    });
  }

  isInputMode(): boolean {
    return this.handledEvent === EventType.ADD || this.handledEvent === EventType.EDIT;
  }

  cancel() {
    this.reset();
  }

  reset() {
    this.todo = null;
  }

  save(todo: Todo) {
    if (this.handledEvent === EventType.ADD) {
      this.handleResult(this.httpService.createTodo(todo));
    }
    if (this.handledEvent === EventType.EDIT && todo instanceof TodoIdWrapper) {
      this.handleResult(this.httpService.editTodo(todo.id, todo));
    }
  }

  handleResult(observableResult: Observable<Todo>) {
    observableResult.subscribe(
      response => {
        this.reset();
        this.eventService.refreshTodos();
      },
      error => console.log(error.statusText)
    );
  }
}
