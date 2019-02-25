import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../shared/model/todo';
import { EventService } from '../shared/service/event/event.service';
import { EventType } from '../shared/service/event/todo-action-event';
import { HttpService } from '../shared/service/http/http.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todo: Todo;
  editMode: boolean;

  constructor(private httpService: HttpService, private eventService: EventService) { }

  ngOnInit() {
    this.eventService.events$.subscribe(event => {
      if (event.eventType === EventType.ADD) {
        this.todo = new Todo();
        this.editMode = true;
      }
      if (event.eventType === EventType.SELECT) {
        this.todo = event.payload;
        this.editMode = false;
      }
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
      response => {
        this.reset();
        this.eventService.refreshTodos();
      },
      error => console.log(error.statusText)
    );
  }
}
