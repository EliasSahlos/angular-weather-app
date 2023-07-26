import { TestBed } from '@angular/core/testing';

import { MobileViewFinderService } from './mobile-view-finder.service';

describe('MobileViewFinderService', () => {
  let service: MobileViewFinderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MobileViewFinderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
