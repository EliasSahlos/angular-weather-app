import {Component, OnInit} from '@angular/core';
import {WeatherService} from './services/weather/weather.service';
import {WeatherData} from "../types/weatherData";
import {ErrorHandlerService} from "./services/error-handler/error-handler.service";
import {SaveCityTriggerService} from "./services/save-city-trigger/save-city-trigger.service";
import {SaveCityService} from "./services/save-city/save-city.service";
import {faBookmark} from "@fortawesome/free-solid-svg-icons/faBookmark";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor
  (
    private weatherService: WeatherService,
    private errorHandlerService: ErrorHandlerService,
    private saveCityTriggerService: SaveCityTriggerService,
    private saveCityService: SaveCityService,
  ) {
  }

  weatherData: WeatherData = {} as WeatherData
  cityName: string = 'Athens';
  errorCode: any = 0
  isLoading: boolean = false
  savedCities: any = []
  faBookmark = faBookmark
  isSavedCitiesBlockOpen:boolean = false

  ngOnInit(): void {
    this.getWeatherData();
    this.saveCityTriggerService.saveCity$.subscribe(() => {
      this.saveCityHandler()
    })
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

  saveCityHandler() {
    console.log("CITY SAVED")
    this.saveCityService.addCityToArr(this.weatherData,this.cityName)
    console.log('SAVED CITIES :',this.saveCityService.getCities())
  }

  savedCitiesButtonHandler(){
    this.isSavedCitiesBlockOpen = !this.isSavedCitiesBlockOpen
  }
}
