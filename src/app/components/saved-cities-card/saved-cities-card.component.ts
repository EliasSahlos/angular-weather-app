import {Component, Input, OnInit} from '@angular/core';
import {SaveCityService} from "../../services/save-city/save-city.service";
import {
  faCloudRain,
  faCloudBolt,
  faSnowflake,
  faSun,
  faCloud,
  faTrash,
} from "@fortawesome/free-solid-svg-icons"
import {GetWeatherIconService} from "../../services/get-weather-icon/get-weather-icon.service";

@Component({
  selector: 'app-saved-cities-card',
  templateUrl: './saved-cities-card.component.html',
  styleUrls: ['./saved-cities-card.component.css']
})
export class SavedCitiesCardComponent implements OnInit {
  constructor(private saveCityService: SaveCityService, private getWeatherIconService: GetWeatherIconService) {
  }

  savedCities: any = []
  @Input() mobileView: boolean = false
  faCloudRain = faCloudRain;
  faCloudBolt = faCloudBolt;
  faSnowFlake = faSnowflake;
  faSun = faSun;
  faCloud = faCloud;
  faTrash = faTrash

  ngOnInit(): void {
    this.getCitiesFromService()
  }

  getCitiesFromService() {
    this.savedCities = this.saveCityService.getCities()
  }

  getWeatherIconFromService(weatherIcon: string): any {
    return this.getWeatherIconService.getWeatherIcon(weatherIcon)
  }

  removeCitiesButtonHandler(city: any,index: number) {
    this.saveCityService.removeCityFromArr(city,index)
  }

  getSavedCitiesCardStyle(){
    if(this.mobileView){
      return 'grid grid-cols-3 gap-2  bg-purple-950 rounded shadow-md p-1 mx-1 my-2 relative'
    }
    else {
      return 'grid grid-cols-3 gap-2  bg-purple-950 rounded shadow-md p-1 mx-1 my-2 relative'
    }
  }
}
