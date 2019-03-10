import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Status } from '../model/status';

const STATUSES_BACKEND_URL = 'https://angular-todo-app-9a208.firebaseio.com/statuses';

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) { }


  getStatuses() {
    return this.http.get<Status[]>(STATUSES_BACKEND_URL + '.json');
  }

  editStatus(id: string, status: Status) {
    return this.http.put<Status>(STATUSES_BACKEND_URL + '/' + id + '.json', status);
  }
}
