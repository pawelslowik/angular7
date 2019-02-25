import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/service/event/event.service';

@Component({
  selector: 'app-todo-action-buttons',
  templateUrl: './todo-action-buttons.component.html',
  styleUrls: ['./todo-action-buttons.component.css']
})
export class TodoActionButtonsComponent implements OnInit {

  constructor(private eventService: EventService) { }

  ngOnInit() {
  }

  refreshTodos() {
    this.eventService.refreshTodos();
  }

  addTodo() {
    this.eventService.addTodo();
  }
}
