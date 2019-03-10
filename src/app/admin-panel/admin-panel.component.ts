import { Component, OnInit } from '@angular/core';
import { HttpService } from './shared/service/http.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css'],
  providers: [HttpService]
})
export class AdminPanelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
