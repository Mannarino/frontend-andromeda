import { TestBed } from '@angular/core/testing';

import { ManejoErrorTokenExpiradoInterceptor } from './manejo-error-token-expirado.interceptor';

describe('ManejoErrorTokenExpiradoInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ManejoErrorTokenExpiradoInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ManejoErrorTokenExpiradoInterceptor = TestBed.inject(ManejoErrorTokenExpiradoInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
