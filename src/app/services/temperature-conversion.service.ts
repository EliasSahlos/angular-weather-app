import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TemperatureConversionService {

  constructor() {
  }

  tempCelsiusToFahrenheit(temp: number) {
    return ((temp * (9 / 5)) + 32)
  }

  minTempCelsiusToFahrenheit(temp_min: number) {
    return ((temp_min * (9 / 5)) + 32)
  }

  feelsLikeTempCelsiusToFahrenheit(feels_like: number) {
    return ((feels_like * (9 / 5)) + 32)
  }

  maxTempCelsiusToFahrenheit(temp_max: any) {
    return ((temp_max * (9 / 5)) + 32)
  }

}
