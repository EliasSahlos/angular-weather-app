import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-city-title',
  templateUrl: './city-title.component.html',
  styleUrls: ['./city-title.component.css']
})
export class CityTitleComponent {
  @Input() cityName:string = ''
}
