import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../../model/todo';
import { Status } from '../../model/status';

const BACKEND_URL = 'https://angular-todo-app-9a208.firebaseio.com';
const TODOS_BACKEND_URL = BACKEND_URL + '/todos';
const STATUSES_BACKEND_URL = BACKEND_URL + '/statuses';

@Injectable()
export class HttpService {
  constructor(private http: HttpClient) { }

  public getTodos() {
    return this.http.get<Todo[]>(TODOS_BACKEND_URL + '.json');
  }

  public createTodo(todo: Todo) {
    return this.http.post<Todo>(TODOS_BACKEND_URL + '.json', todo);
  }

  public deleteTodo(id: string) {
    return this.http.delete(TODOS_BACKEND_URL + '/' + id + '.json');
  }

  editTodo(id: string, todo: Todo) {
    return this.http.put<Todo>(TODOS_BACKEND_URL + '/' + id + '.json', todo);
  }

  getStatuses() {
    return this.http.get<Status[]>(STATUSES_BACKEND_URL + '.json');
  }
}
