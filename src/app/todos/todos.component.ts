import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from '../shared/model/todo';
import { HttpService } from '../shared/service/http.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  @Output() todoSelected: EventEmitter<Todo> = new EventEmitter();

  todos = [];

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.getTodos().subscribe(
      todos => this.todos = todos,
      error => console.log(error)
    );
  }

  selectTodo(todo: Todo) {
    this.todoSelected.emit(todo);
    console.log('selected=' + JSON.stringify(todo));
  }
}
