import { Component, OnInit } from '@angular/core';
import { Todo } from '../shared/models/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[] = [
    new Todo('test title', 'test description', new Date())
  ];

  constructor() { }

  ngOnInit() {
  }

}
