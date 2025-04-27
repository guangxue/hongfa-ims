import { TestBed } from '@angular/core/testing';

import { BirchService } from './birch.service';

describe('BirchService', () => {
  let service: BirchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BirchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
