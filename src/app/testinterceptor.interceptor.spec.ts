import { TestBed } from '@angular/core/testing';

import { TestinterceptorInterceptor } from './testinterceptor.interceptor';

describe('TestinterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      TestinterceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: TestinterceptorInterceptor = TestBed.inject(TestinterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
