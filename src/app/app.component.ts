import {Component, OnInit} from '@angular/core';
import {WeatherService} from './services/weather.service';
import {WeatherData} from "../types/weatherData";
import {ErrorHandlerService} from "./services/error-handler.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private weatherService: WeatherService, private errorHandlerService: ErrorHandlerService) {
  }

  weatherData: WeatherData = {} as WeatherData
  cityName: string = '';
  errorCode: any = 0
  isLoading: boolean = false

  ngOnInit(): void {
    this.getWeatherData();
  }

  getWeatherData() {

    if (this.cityName != '') {
      this.isLoading = true
      this.weatherService
        .weatherAPICall(`${this.cityName}`)
        .subscribe((data) => {
          this.weatherData = data;
          console.log(data);
          this.errorCode = 0;
          this.isLoading = false
        }, (error) => {
          this.errorCode = this.errorHandlerService.getErrorStatus();
          this.cityName = '';
          this.isLoading = false
        });
    }
  }

  receiveSelectedCity($event: any) {
    this.cityName = $event;
  }

  onButtonClicked() {
    this.getWeatherData();
    this.errorCode = 0
  }
}
