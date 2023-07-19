import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {enviroment} from "../../../enviroments/enviroment";
import {WeatherData} from "../../../types/weatherData";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) {
  }

  weatherAPICall(city: string): Observable<any> {
    return this.http.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${enviroment.API_KEY}&cnt=5&units=metric`)
      .pipe(map((res: any) => this.filterWeatherData(res)))
  }

  private filterWeatherData(res: any): WeatherData {
    let weatherIcon: string | null = this.weatherIconPicker(res)
    return {
      weatherIcon: weatherIcon,
      desc: res['list'][0]['weather'][0]['description'],
      temp: res['list'][0]['main']['temp'],
      temp_max: res['list'][0]['main']['temp_max'],
      temp_min: res['list'][0]['main']['temp_min'],
      humidity: res['list'][0]['main']['humidity'],
      wind_speed: res['list'][0]['wind']['speed'],
      wind_deg: res['list'][0]['wind']['deg'],
      feels_like: res['list'][0]['main']['feels_like'],
      futureWeather: this.futureObjSlice(res).map((futureObj) => ({
        ...futureObj,
        weatherIcon: this.futureWeatherIconPicker(futureObj)
      }))
    }

  }

  private weatherIconPicker(res: any): string | null {
    const weatherCondition = res['list'][0]['weather'][0]['main'];
    let weatherIcon: string = '';

    if (weatherCondition === 'Rain') {
      weatherIcon = 'faCloudRain';
      return weatherIcon
    }
    if (weatherCondition === 'Thunderstorm') {
      weatherIcon = 'faCloudBolt';
      return weatherIcon
    }
    if (weatherCondition === 'Snow') {
      weatherIcon = 'faSnowFlake';
      return weatherIcon
    }
    if (weatherCondition === 'Clear') {
      weatherIcon = 'faSun';
      return weatherIcon
    }
    if (weatherCondition === 'Clouds') {
      weatherIcon = 'faCloud';
      return weatherIcon
    }
    return null
  }

  private futureWeatherIconPicker(obj: any): string | null {
    const weatherCondition = obj.weather[0].main;
    let futureWeatherIcon: string = '';

    if (weatherCondition === 'Rain') {
      futureWeatherIcon = 'faCloudRain';
      return futureWeatherIcon
    }
    if (weatherCondition === 'Thunderstorm') {
      futureWeatherIcon = 'faCloudBolt';
      return futureWeatherIcon
    }
    if (weatherCondition === 'Snow') {
      futureWeatherIcon = 'faSnowFlake';
      return futureWeatherIcon
    }
    if (weatherCondition === 'Clear') {
      futureWeatherIcon = 'faSun';
      return futureWeatherIcon
    }
    if (weatherCondition === 'Clouds') {
      futureWeatherIcon = 'faCloud';
      return futureWeatherIcon
    }
    return null
  }

  private futureObjSlice(res: any) {
    let futureWeatherObj: any[] = [];
    res['list'].slice(1, res['list'].length).forEach((data: any) => futureWeatherObj.push(data));
    return futureWeatherObj;
  }
}
