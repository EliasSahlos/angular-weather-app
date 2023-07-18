import {Component, OnInit} from '@angular/core';
import {WeatherService} from './services/weather.service';
import {WeatherData} from "../types/weatherData";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private weatherService: WeatherService) {
  }

  weatherData: WeatherData = {} as WeatherData
  cityName: string = 'Athens';
  errorCode: any = 0

  ngOnInit(): void {
    this.getWeatherData();
  }

  getWeatherData() {
    if (this.cityName != '') {
      this.weatherService
        .weatherAPICall(`${this.cityName}`)
        .subscribe((data) => {
          this.weatherData = data;
          console.log(data);
        });
    }
  }

  receiveSelectedCity($event: any) {
    this.cityName = $event;
    console.log(this.cityName)
  }

  onButtonClicked() {
    this.getWeatherData();
  }
}
