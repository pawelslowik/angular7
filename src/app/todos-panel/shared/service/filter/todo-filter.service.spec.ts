import { TestBed } from '@angular/core/testing';

import { TodoFilterService } from './todo-filter.service';

describe('TodoFilterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TodoFilterService = TestBed.get(TodoFilterService);
    expect(service).toBeTruthy();
  });
});
