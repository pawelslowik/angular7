import { Component, OnInit } from '@angular/core';
import { HttpService } from '../shared/service/http.service';
import { Status } from '../shared/model/status';
import { map } from 'lodash';

@Component({
  selector: 'app-status-panel',
  templateUrl: './status-panel.component.html',
  styleUrls: ['./status-panel.component.css']
})
export class StatusPanelComponent implements OnInit {

  statuses: Status[] = [];

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.reloadStatuses();
  }

  reloadStatuses() {
    this.httpService.getStatuses().subscribe(
      statuses => this.statuses = map(statuses, (value, prop) => ({prop, value})) ,
      error => {
        console.log(error);
      }
    );
  }

  saveStatus(id: string, status: Status) {
    this.httpService.editStatus(id, status).subscribe(
      () => this.reloadStatuses(),
      error => {
        console.log(error);
        this.reloadStatuses();
      }
    );
  }
}
