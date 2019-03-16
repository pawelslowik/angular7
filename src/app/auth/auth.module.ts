import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { DummyAuthService } from './shared/service/auth.service';
import { AuthGuard } from './shared/service/auth.guard';
import { AdminAuthLoadGuard } from './shared/service/admin-auth-load.guard';
import { LogoutComponent } from './logout/logout.component';
import { AdminAuthGuard } from './shared/service/admin-auth.guard';

@NgModule({
  declarations: [LoginComponent, LogoutComponent],
  imports: [
    CommonModule
  ],
  providers: [DummyAuthService, AuthGuard, AdminAuthLoadGuard, AdminAuthGuard],
  exports: [LogoutComponent]
})
export class AuthModule { }
