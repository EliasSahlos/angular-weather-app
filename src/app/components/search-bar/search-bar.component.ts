import { Component, EventEmitter, Output } from '@angular/core';
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent {
  @Output() onSelectedCity = new EventEmitter<string>();
  @Output() searchButtonClick = new EventEmitter();

  selectedCity: string = '';
  faMagnifyingGlass = faMagnifyingGlass

  saveCity() {
    this.onSelectedCity.emit(this.selectedCity);
  }

  onButtonClick() {
    this.searchButtonClick.emit();
    this.clearCity();
  }

  private clearCity() {
    this.selectedCity = '';
  }
}
