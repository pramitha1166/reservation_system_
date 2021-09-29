import { TestBed } from '@angular/core/testing';

import { FirebaseAuthServiceService } from './firebase-auth-service.service';

describe('FirebaseAuthServiceService', () => {
  let service: FirebaseAuthServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirebaseAuthServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
