import { TestBed, async, inject } from '@angular/core/testing';

import { AdminAuthLoadGuard } from './admin-auth-load.guard';

describe('AdminAuthLoadGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminAuthLoadGuard]
    });
  });

  it('should ...', inject([AdminAuthLoadGuard], (guard: AdminAuthLoadGuard) => {
    expect(guard).toBeTruthy();
  }));
});
