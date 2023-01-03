import { TestBed } from '@angular/core/testing';

import { HandleTokensService } from './handle-tokens.service';

describe('HandleTokensService', () => {
  let service: HandleTokensService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HandleTokensService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
