import { TestBed } from '@angular/core/testing';

import { SaveCityService } from './save-city.service';

describe('SaveCityService', () => {
  let service: SaveCityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaveCityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
