import { TestBed } from '@angular/core/testing';

import { SaveCityTriggerService } from './save-city-trigger.service';

describe('SaveCityTriggerService', () => {
  let service: SaveCityTriggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaveCityTriggerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
