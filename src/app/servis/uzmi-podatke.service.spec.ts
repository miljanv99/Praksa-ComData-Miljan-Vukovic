import { TestBed } from '@angular/core/testing';

import { UzmiPodatkeService } from './uzmi-podatke.service';

describe('UzmiPodatkeService', () => {
  let service: UzmiPodatkeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UzmiPodatkeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
