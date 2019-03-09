import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/service/event/event.service';
import { EventType } from '../shared/service/event/todo-action-event';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-status-banner',
  templateUrl: './status-banner.component.html',
  styleUrls: ['./status-banner.component.css']
})
export class StatusBannerComponent implements OnInit {

  statusMessage = '';
  status = '';
  private readonly SUPPORTED_EVENTS = [EventType.ADD_SUCCESS, EventType.ADD_ERROR, EventType.EDIT_SUCCESS,
    EventType.EDIT_ERROR, EventType.DELETE_SUCCESS, EventType.DELETE_ERROR, EventType.REFRESH_ERROR];
  private statusResetTimeout;

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.eventService.events$
    .pipe(filter(event => this.SUPPORTED_EVENTS.includes(event.eventType)))
    .subscribe(event => {
      switch (event.eventType) {
        case EventType.ADD_SUCCESS: this.success(`Successfully added todo "${event.payload.title}"`); break;
        case EventType.ADD_ERROR: this.error(`Failed to add a todo "${event.payload.title}"`); break;
        case EventType.EDIT_SUCCESS: this.success(`Successfully edited todo "${event.payload.title}"`); break;
        case EventType.EDIT_ERROR: this.error(`Failed to edit a todo "${event.payload.title}"`); break;
        case EventType.DELETE_SUCCESS: this.success(`Successfully deleted todo "${event.payload.title}"`); break;
        case EventType.DELETE_ERROR: this.error(`Failed to delete todo "${event.payload.title}"`); break;
        case EventType.REFRESH_ERROR: this.error('Failed to load todos'); break;
      }
      if (this.statusResetTimeout) {
        clearTimeout(this.statusResetTimeout);
      }
      this.statusResetTimeout = setTimeout(() => this.reset(), 5000);
    });
  }

  private error(message: string) {
    this.statusMessage = message;
    this.status = 'error';
  }

  private success(message: string) {
    this.statusMessage = message;
    this.status = 'success';
  }

  public reset() {
    this.statusMessage = '';
    this.status = '';
  }
}
