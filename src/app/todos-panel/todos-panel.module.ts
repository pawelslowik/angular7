import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosPanelComponent } from './todos-panel.component';
import { TodoComponent } from './todo/todo.component';
import { TodosComponent } from './todos/todos.component';
import { TodoActionButtonsComponent } from './todo-action-buttons/todo-action-buttons.component';
import { StatusBannerComponent } from './status-banner/status-banner.component';
import { TodoFilterPipe } from './shared/pipe/todo-filter.pipe';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    TodosPanelComponent,
    TodoComponent,
    TodosComponent,
    TodoActionButtonsComponent,
    StatusBannerComponent,
    TodoFilterPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    TodosPanelComponent
  ]
})
export class TodosPanelModule { }
