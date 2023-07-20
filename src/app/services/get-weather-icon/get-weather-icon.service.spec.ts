import { TestBed } from '@angular/core/testing';

import { GetWeatherIconService } from './get-weather-icon.service';

describe('GetWeatherIconService', () => {
  let service: GetWeatherIconService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetWeatherIconService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
