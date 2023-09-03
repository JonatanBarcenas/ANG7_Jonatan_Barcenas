import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { HasSessionGuard} from './has-session.guard';
/*
describe('hasSessionGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => hasSessionGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
*/