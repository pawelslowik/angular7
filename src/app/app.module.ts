import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TodosPanelComponent } from './todos-panel/todos-panel.component';
import { TodosPanelModule } from './todos-panel/todos-panel.module';
import { AuthModule } from './auth/auth.module';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './auth/shared/service/auth.guard';
import { AdminAuthLoadGuard as AdminAuthLoadGuard } from './auth/shared/service/admin-auth-load.guard';
import { AdminAuthGuard } from './auth/shared/service/admin-auth.guard';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TodosPanelModule,
    AuthModule,
    RouterModule.forRoot([
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'todos',
        component: TodosPanelComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'admin',
        loadChildren: './admin-panel/admin-panel.module#AdminPanelModule',
        canActivate: [AdminAuthGuard],
        canLoad: [AdminAuthLoadGuard]
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
