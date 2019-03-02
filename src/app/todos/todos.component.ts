import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { map } from 'lodash';
import { Todo } from '../shared/model/todo';
import { EventService } from '../shared/service/event/event.service';
import { EventType } from '../shared/service/event/todo-action-event';
import { HttpService } from '../shared/service/http/http.service';
import { TodoIdWrapper } from '../shared/model/todo-id-wrapper';
import { filter, throttleTime } from 'rxjs/operators';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos = [];

  constructor(private httpService: HttpService, private eventService: EventService) { }

  ngOnInit() {
    this.refreshTodos();
    this.eventService.events$
    .pipe(filter(event => event.eventType === EventType.REFRESH))
    .pipe(throttleTime(3000))
    .subscribe(event => this.refreshTodos());
  }

  refreshTodos() {
    this.httpService.getTodos().subscribe(
      todos => this.todos = map(todos, (value, prop) => ({ prop, value })),
      error => {
        this.eventService.refreshTodosError();
        console.log(error);
      }
    );
  }

  selectTodo(todo: Todo) {
    this.eventService.selectTodo(todo);
  }

  deleteTodo(id: string, todo: Todo) {
    this.httpService.deleteTodo(id).subscribe(
      response => {
        this.eventService.deleteTodoSuccess(todo);
        this.refreshTodos();
      },
      error => {
        this.eventService.deleteTodoError(todo);
        console.log(error);
      }
    );
  }

  editTodo(id: string, todo: Todo) {
    this.eventService.editTodo(new TodoIdWrapper(id, todo));
  }
}
