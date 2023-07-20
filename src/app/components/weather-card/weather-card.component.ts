import {Component, Input} from '@angular/core';
import {trigger, state, animate, transition} from "@angular/animations";
import {
  faCloudRain,
  faCloudBolt,
  faSnowflake,
  faSun,
  faCloud,
  faDroplet,
  faArrowsUpDownLeftRight,
  faWind,
  faTemperatureArrowDown,
  faTemperatureHalf,
  faTemperatureArrowUp,
} from "@fortawesome/free-solid-svg-icons"
import {TemperatureConversionService} from "../../services/temperature-conversion/temperature-conversion.service";
import {GetWeatherIconService} from "../../services/get-weather-icon/get-weather-icon.service";


@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent {
  constructor(private temperatureConvertService: TemperatureConversionService,private getWeatherIconService: GetWeatherIconService) {
  }

  @Input() weatherData: any

  isTempCelsius: boolean = true;
  fahrenheitTemp: number = 0;
  minFahrenheitTemp: number = 0;
  feelsLikeFahrenheitTemp: number = 0;
  maxFahrenheitTemp: number = 0;
  futureWeatherFahrenheitTemp: number = 0

  faCloudRain = faCloudRain;
  faCloudBolt = faCloudBolt;
  faSnowFlake = faSnowflake;
  faSun = faSun;
  faCloud = faCloud;
  faDroplet = faDroplet;
  faArrowsUpDownLeftRight = faArrowsUpDownLeftRight;
  faWind = faWind;
  faTemperatureArrowDown = faTemperatureArrowDown;
  faTemperatureHalf = faTemperatureHalf;
  faTemperatureArrowUp = faTemperatureArrowUp;

  getWeatherIcon(weatherIcon: string): any {
    return this.getWeatherIconService.getWeatherIcon(weatherIcon)
  }

  degreesButtonClickHandler(temp: any, temp_min: any, feels_like: any, temp_max: any, futureTemp: any) {
    if (this.isTempCelsius) {
      this.fahrenheitTemp = this.temperatureConvertService.tempCelsiusToFahrenheit(temp)
      this.minFahrenheitTemp = this.temperatureConvertService.minTempCelsiusToFahrenheit(temp_min)
      this.feelsLikeFahrenheitTemp = this.temperatureConvertService.feelsLikeTempCelsiusToFahrenheit(feels_like)
      this.maxFahrenheitTemp = this.temperatureConvertService.maxTempCelsiusToFahrenheit(temp_max)
      this.futureWeatherFahrenheitTemp = this.temperatureConvertService.tempCelsiusToFahrenheit(futureTemp)
      this.isTempCelsius = false
    } else {
      this.isTempCelsius = true
    }
  }
}
