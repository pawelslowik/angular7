import { Injectable } from '@angular/core';

@Injectable()
export class DummyAuthService {

  private loggedIn = false;
  private admin = false;

  constructor() { }

  public logIn(admin: boolean) {
    this.admin = admin;
    this.loggedIn = true;
  }

  public logOut() {
    this.admin = false;
    this.loggedIn = false;
  }

  public isLoggedIn(): boolean  {
    return this.loggedIn;
  }

  public isAdminLoggedIn(): boolean  {
    return this.loggedIn && this.admin;;
  }
}
