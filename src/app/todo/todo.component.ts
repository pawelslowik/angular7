import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { Todo } from '../shared/model/todo';
import { TodoActionEvent, EventType } from '../shared/model/todo-action-event';
import { HttpService } from '../shared/service/http.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input() todo: Todo;
  @Input() todoActionRequested: EventEmitter<TodoActionEvent>;
  editMode: boolean;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.todoActionRequested.subscribe(event => {
      this.editMode = (event.eventType === EventType.ADD);
    });
  }

  cancel() {
    this.reset();
  }

  reset() {
    this.todo = null;
    this.editMode = false;
  }

  save(todo: Todo) {
    this.httpService.saveTodo(todo).subscribe(
      response => this.reset(),
      error => console.log(error.statusText)
    );
  }
}
