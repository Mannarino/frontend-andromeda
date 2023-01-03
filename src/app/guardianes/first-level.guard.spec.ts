import { TestBed } from '@angular/core/testing';

import { FirstLevelGuard } from './first-level.guard';

describe('FirstLevelGuard', () => {
  let guard: FirstLevelGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(FirstLevelGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
