import { Component, OnInit } from '@angular/core';
import { HttpService } from './shared/service/http/http.service';
import { StatusService } from './shared/service/status/status.service';

@Component({
  selector: 'app-todos-panel',
  templateUrl: './todos-panel.component.html',
  styleUrls: ['./todos-panel.component.css'],
  providers: [HttpService, StatusService]
})
export class TodosPanelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
