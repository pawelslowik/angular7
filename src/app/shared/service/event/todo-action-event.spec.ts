import { TodoActionEvent, EventType } from './todo-action-event';

describe('TodoActionEvent', () => {
  it('should create an instance', () => {
    expect(new TodoActionEvent(EventType.ADD)).toBeTruthy();
  });
});
