import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo, TODO_LIST } from '../shared/models/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  @Output() todoSelected: EventEmitter<Todo> = new EventEmitter();

  todos = TODO_LIST;

  constructor() { }

  ngOnInit() {
  }

  selectTodo(todo: Todo) {
    this.todoSelected.emit(todo);
    console.log('selected=' + JSON.stringify(todo));
  }
}
