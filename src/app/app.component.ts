import { Component, Output, EventEmitter } from '@angular/core';
import { Todo } from './shared/model/todo';
import { TodoActionEvent } from './shared/model/todo-action-event';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-todo-app';
  selectedTodo: Todo;
  @Output() todoActionEvent: EventEmitter<TodoActionEvent> = new EventEmitter();

  onTodoSelected(todo: Todo) {
    this.selectedTodo = todo;
  }

  onTodoAction(event: TodoActionEvent) {
    this.todoActionEvent.emit(event);
  }
}
