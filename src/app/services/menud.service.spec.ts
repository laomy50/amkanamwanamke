import { TestBed } from '@angular/core/testing';

import { MenudService } from './menud.service';

describe('MenudService', () => {
  let service: MenudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
