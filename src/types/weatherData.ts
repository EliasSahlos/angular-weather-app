export interface WeatherData {
  desc: string;
  feels_like: number;
  futureWeather: FutureWeather[];
  humidity: number;
  temp: number;
  temp_max: number;
  temp_min: number;
  weatherIcon: any;
  wind_deg: number;
  wind_speed: number;
}

export interface SavedCities extends WeatherData {
    cityName: string;
  }

export interface FutureWeather {
  clouds: Object;
  dt: number;
  dt_txt: string;
  main: Object;
  pop: number;
  sys: Object;
  visibility: number;
  weather: Array<Object>;
  weatherIcon: string;
  wind: Object;
}
