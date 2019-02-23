import { Component } from '@angular/core';
import { Todo } from './shared/models/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-todo-app';
  selectedTodo: Todo;

  selectTodo(todo: Todo) {
    this.selectedTodo = todo;
  }
}
