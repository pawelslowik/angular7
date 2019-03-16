import { Component } from '@angular/core';
import { DummyAuthService } from './auth/shared/service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular Todo App';

  constructor(private authService: DummyAuthService) {}


}


