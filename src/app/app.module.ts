import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TodosPanelComponent } from './todos-panel/todos-panel.component';
import { TodosPanelModule } from './todos-panel/todos-panel.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TodosPanelModule,
    RouterModule.forRoot([
      {
        path: 'todos',
        component: TodosPanelComponent
      },
      {
        path: 'admin',
        loadChildren: './admin-panel/admin-panel.module#AdminPanelModule'
      },
      {
        path: '',
        redirectTo: '/todos',
        pathMatch: 'full'
      }
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
