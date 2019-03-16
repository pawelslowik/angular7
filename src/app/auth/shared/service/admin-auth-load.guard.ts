import { Injectable } from '@angular/core';
import {CanLoad, Router, Route, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { DummyAuthService } from './auth.service';

@Injectable()
export class AdminAuthLoadGuard implements CanLoad  {

  constructor(private authService: DummyAuthService, private router: Router) {}

  canLoad(route: Route, segments: UrlSegment[]): boolean | Observable<boolean> | Promise<boolean> {
    return this.authService.isAdminLoggedIn();
  }
}
