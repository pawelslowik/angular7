import { TodoIdWrapper } from './todo-id-wrapper';
import { Todo } from './todo';

describe('TodoIdWrapper', () => {
  it('should create an instance', () => {
    expect(new TodoIdWrapper('', new Todo())).toBeTruthy();
  });
});
