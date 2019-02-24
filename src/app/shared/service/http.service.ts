import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../model/todo';

const BACKEND_URL = 'https://angular-todo-app-9a208.firebaseio.com/todos';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient) { }

  public getTodos() {
    return this.http.get<Todo[]>(BACKEND_URL + '.json');
  }

  public saveTodo(todo: Todo) {
    return this.http.post<Todo>(BACKEND_URL + '.json', todo);
  }

  public deleteTodo(id: string) {
    return this.http.delete(BACKEND_URL + '/' + id + '.json');
  }
}
