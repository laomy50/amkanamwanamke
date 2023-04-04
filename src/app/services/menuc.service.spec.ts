import { TestBed } from '@angular/core/testing';

import { MenucService } from './menuc.service';

describe('MenucService', () => {
  let service: MenucService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenucService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
