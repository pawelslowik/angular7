import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Todo } from '../shared/model/todo';
import { HttpService } from '../shared/service/http.service';
import { TodoActionEvent, EventType } from '../shared/model/todo-action-event';
import { map } from 'lodash';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  @Output() todoSelected: EventEmitter<Todo> = new EventEmitter();
  @Input() todoActionRequested: EventEmitter<TodoActionEvent>;

  todos = [];

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.refreshTodos();
    this.todoActionRequested.subscribe(event => {
      switch (event.eventType) {
            case EventType.REFRESH: this.refreshTodos(); break;
        }
    });
  }

  refreshTodos() {
    this.httpService.getTodos().subscribe(
      todos => this.todos = map(todos, (value, prop) => ({ prop, value })),
      error => console.log(error)
    );
  }

  selectTodo(todo: Todo) {
    this.todoSelected.emit(todo);
  }

  deleteTodo(id: string) {
    this.httpService.deleteTodo(id).subscribe(
      response => this.refreshTodos(),
      error => console.log(error)
    );
  }
}
