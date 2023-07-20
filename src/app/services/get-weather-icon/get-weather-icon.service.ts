import {Injectable} from '@angular/core';
import {
  faCloudRain,
  faCloudBolt,
  faSnowflake,
  faSun,
  faCloud,
} from "@fortawesome/free-solid-svg-icons"

@Injectable({
  providedIn: 'root'
})
export class GetWeatherIconService {
  constructor() {
  }

  faCloudRain = faCloudRain;
  faCloudBolt = faCloudBolt;
  faSnowFlake = faSnowflake;
  faSun = faSun;
  faCloud = faCloud;

  getWeatherIcon(weatherIcon: string) {
    switch (weatherIcon) {
      case 'faCloudRain':
        return faCloudRain;
      case 'faCloudBolt':
        return faCloudBolt;
      case 'faSnowFlake':
        return faSnowflake;
      case 'faSun':
        return faSun;
      case 'faCloud':
        return faCloud;
      default:
        return null
    }
  }
}
