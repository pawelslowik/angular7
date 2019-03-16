import { Component, OnInit } from '@angular/core';
import { DummyAuthService } from '../shared/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private authService: DummyAuthService, private router: Router) { }

  ngOnInit() {
  }

  logOut() {
    this.authService.logOut();
    this.router.navigate(['/login']);
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }
}
