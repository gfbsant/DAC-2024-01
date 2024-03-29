import { TestBed } from '@angular/core/testing';

import { SaqueService } from './saque.service';

describe('SaqueService', () => {
  let service: SaqueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaqueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
