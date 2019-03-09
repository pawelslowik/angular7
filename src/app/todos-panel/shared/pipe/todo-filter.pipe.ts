import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../model/todo';

@Pipe({
  name: 'todoFilter'
})
export class TodoFilterPipe implements PipeTransform {

  private readonly FILTERED_FIELDS = ['title', 'description','status']; 

  transform(todos: {prop: string, value: Todo}[], filterString: string): {prop: string, value: Todo}[] {
    if (!todos || todos.length === 0 || !filterString) {
      return todos;
    }
    return todos.filter(todo => this.FILTERED_FIELDS.some(field => this.matchField(filterString, todo, field)));
  }

  private matchField(filterString, todo, field) {
    return todo.value.title ? todo.value[field].toLowerCase().includes(filterString.toLocaleLowerCase()) : false;
  }
}
