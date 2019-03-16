import { Component, OnInit } from '@angular/core';
import { DummyAuthService } from '../shared/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: DummyAuthService, private router: Router) { }

  ngOnInit() {
  }

  loginUser() {
    this.authService.logIn(false);
    this.navigateRoot();
  }

  loginAdmin() {
    this.authService.logIn(true);
    this.navigateRoot();
  }

  private navigateRoot() {
    this.router.navigate(['/']);
  }
}
