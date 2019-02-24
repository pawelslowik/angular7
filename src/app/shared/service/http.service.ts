import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../model/todo';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  public getTodos() {
    return this.http.get<Todo[]>('https://angular-todo-app-9a208.firebaseio.com/todos.json');
  }
}
