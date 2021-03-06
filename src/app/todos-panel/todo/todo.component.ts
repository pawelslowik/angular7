import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Todo } from '../shared/model/todo';
import { TodoIdWrapper } from '../shared/model/todo-id-wrapper';
import { EventService } from '../shared/service/event/event.service';
import { EventType } from '../shared/service/event/todo-action-event';
import { HttpService } from '../shared/service/http/http.service';
import { StatusService } from '../shared/service/status/status.service';
import { map } from 'lodash';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  statuses = [];
  private readonly SUPPORTED_EVENTS = [EventType.ADD, EventType.ADD_ERROR, EventType.EDIT,
    EventType.EDIT_ERROR, EventType.SELECT];
  todo: Todo;
  private handledEvent: EventType;

  constructor(private httpService: HttpService, private eventService: EventService,
              private statusService: StatusService) { }

  ngOnInit() {
    this.eventService.events$
    .pipe(filter(event => this.SUPPORTED_EVENTS.includes(event.eventType)))
    .subscribe(event => {
      switch (event.eventType) {
        case EventType.ADD:
          this.handledEvent = event.eventType;
          this.todo = new Todo();
          this.refreshStatusNames();
          break;
        case EventType.SELECT:
          if (this.handledEvent === EventType.ADD || this.handledEvent === EventType.EDIT) {
            break;
          }
          this.handledEvent = event.eventType;
          this.todo = event.payload;
          if (this.todo) {
            this.refreshStatusNames();
          }
          break;
        case EventType.EDIT:
          this.handledEvent = event.eventType;
          this.todo = event.payload;
          break;
        case EventType.EDIT_ERROR: break;
        case EventType.ADD_ERROR: break;
        default:
          this.reset();
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
    this.handledEvent = null;
  }

  save(todo: Todo) {
    if (this.handledEvent === EventType.ADD) {
      this.handleResult(
        this.httpService.createTodo(todo),
        () => this.eventService.addTodoSuccess(todo),
        () => this.eventService.addTodoError(todo)
      );
    }
    if (this.handledEvent === EventType.EDIT && todo instanceof TodoIdWrapper) {
      this.handleResult(
        this.httpService.editTodo(todo.id, todo),
        () => this.eventService.editTodoSuccess(todo),
        () => this.eventService.editTodoError(todo)
      );
    }
  }

  handleResult(observableResult: Observable<Todo>, succeessHandler, errorHandler) {
    observableResult.subscribe(
      response => {
        succeessHandler();
        this.reset();
        this.eventService.refreshTodos();
      },
      error => {
        errorHandler();
        console.log(error.statusText);
      }
    );
  }

  getStatusColor(status: string) {
    return this.statusService.getStatusColor(status);
  }

  refreshStatusNames() {
    this.statuses = map(this.statusService.getStatuses(), status => status.name);
  }
}
