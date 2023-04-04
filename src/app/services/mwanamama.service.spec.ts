import { TestBed } from '@angular/core/testing';

import { MwanamamaService } from './mwanamama.service';

describe('MwanamamaService', () => {
  let service: MwanamamaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MwanamamaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
