import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/service/event/event.service';
import { TodoFilterService } from '../shared/service/filter/todo-filter.service';

@Component({
  selector: 'app-todo-action-buttons',
  templateUrl: './todo-action-buttons.component.html',
  styleUrls: ['./todo-action-buttons.component.css']
})
export class TodoActionButtonsComponent implements OnInit {

  filterValue = '';

  constructor(private eventService: EventService, private todoFilterService: TodoFilterService) { }

  ngOnInit() {
  }

  refreshTodos() {
    this.eventService.refreshTodos();
  }

  addTodo() {
    this.eventService.addTodo();
  }

  filterTodos() {
    this.todoFilterService.filter(this.filterValue);
  }

  clearFilter() {
    this.filterValue = '';
    this.filterTodos();
  }
}
