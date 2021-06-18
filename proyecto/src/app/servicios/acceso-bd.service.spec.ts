import { TestBed } from '@angular/core/testing';

import { AccesoBdService } from './acceso-bd.service';

describe('AccesoBdService', () => {
  let service: AccesoBdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccesoBdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
