import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TodoActionEvent, EventType } from '../shared/model/todo-action-event';

@Component({
  selector: 'app-todo-action-buttons',
  templateUrl: './todo-action-buttons.component.html',
  styleUrls: ['./todo-action-buttons.component.css']
})
export class TodoActionButtonsComponent implements OnInit {

  @Output() todoAction: EventEmitter<TodoActionEvent> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  refreshTodos() {
    this.todoAction.emit(new TodoActionEvent(EventType.REFRESH));
  }

  addTodo() {
    this.todoAction.emit(new TodoActionEvent(EventType.ADD));
  }
}
