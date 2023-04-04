import { TestBed } from '@angular/core/testing';

import { MenufService } from './menuf.service';

describe('MenufService', () => {
  let service: MenufService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenufService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
