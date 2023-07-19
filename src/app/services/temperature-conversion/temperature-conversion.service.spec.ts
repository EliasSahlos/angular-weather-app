import { TestBed } from '@angular/core/testing';

import { TemperatureConversionService } from './temperature-conversion.service';

describe('TemperatureConversionService', () => {
  let service: TemperatureConversionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TemperatureConversionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
