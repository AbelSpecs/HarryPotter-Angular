import { TestBed } from '@angular/core/testing';

import { SolictudesService } from './solictudes.service';

describe('SolictudesService', () => {
  let service: SolictudesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolictudesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
