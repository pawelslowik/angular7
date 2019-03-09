import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoFilterService {

  private filterValues: Subject<string> = new Subject<string>();
  todoFilter$: Observable<string>;

  constructor() {
    this.todoFilter$ = this.filterValues.asObservable();
  }

  filter(filterValue: string) {
    this.filterValues.next(filterValue);
  }
}
