import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { map, chain, find } from 'lodash';
import { Todo } from '../shared/model/todo';
import { EventService } from '../shared/service/event/event.service';
import { EventType } from '../shared/service/event/todo-action-event';
import { HttpService } from '../shared/service/http/http.service';
import { TodoIdWrapper } from '../shared/model/todo-id-wrapper';
import { filter, throttleTime } from 'rxjs/operators';
import { TodoFilterService } from '../shared/service/filter/todo-filter.service';
import { Status } from '../shared/model/status';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  providers: [HttpService]
})
export class TodosComponent implements OnInit {

  todos = [];
  todoFilterValue = '';
  statuses: Status[] = [];

  constructor(private httpService: HttpService, private eventService: EventService, private todoFilterService: TodoFilterService) { }

  ngOnInit() {
    this.refreshTodos();
    this.eventService.events$
    .pipe(filter(event => event.eventType === EventType.REFRESH))
    .pipe(throttleTime(3000))
    .subscribe(event => this.refreshTodos());

    this.todoFilterService.todoFilter$
    .subscribe(filterValue => this.todoFilterValue = filterValue);
  }

  refreshTodos() {
    this.httpService.getTodos().subscribe(
      todos => {
        this.todos = map(todos, (value, prop) => ({ prop, value }));
        this.httpService.getStatuses().subscribe(
          statuses => this.statuses = statuses,
          error => console.log(error)
        );
      },
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

  getStatusColor(status: string) {
    const matchedStatus: Status = find(this.statuses, s => s.name === status, 0);
    return matchedStatus ? matchedStatus.color : this.getDefaultStatusColor(status);
  }

  private getDefaultStatusColor(status: string) {
    let color;
    switch (status) {
      case 'canceled': color = 'lightcoral'; break;
      case 'started': color = 'yellow'; break;
      case 'completed': color = 'mediumseagreen'; break;
      case 'not started':
      default: color = 'lightblue'; break;
    }
    return color;
  }
}
