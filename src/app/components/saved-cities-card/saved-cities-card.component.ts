import {Component, OnInit} from '@angular/core';
import {SaveCityService} from "../../services/save-city/save-city.service";

@Component({
  selector: 'app-saved-cities-card',
  templateUrl: './saved-cities-card.component.html',
  styleUrls: ['./saved-cities-card.component.css']
})
export class SavedCitiesCardComponent implements OnInit {
  constructor(private saveCityService: SaveCityService) {
  }

  savedCities: any = []

  ngOnInit(): void {
    this.getCitiesFromService()

  }

  getCitiesFromService() {
    this.savedCities = this.saveCityService.getCities()
    console.log("SAVED CITIES ON COMP",this.savedCities)
  }
}
