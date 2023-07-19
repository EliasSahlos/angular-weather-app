import {Component} from '@angular/core';
import {SaveCityTriggerService} from "../../services/save-city-trigger/save-city-trigger.service";

@Component({
  selector: 'app-save-city-button',
  templateUrl: './save-city-button.component.html',
  styleUrls: ['./save-city-button.component.css']
})
export class SaveCityButtonComponent {
  constructor(private saveCityTriggerService: SaveCityTriggerService) {
  }

  saveButtonClickHandler(){
    this.saveCityTriggerService.triggerSaveCity()
  }
}
