import {Component, Input, OnInit} from '@angular/core';
import {faInfo} from "@fortawesome/free-solid-svg-icons/faInfo";

@Component({
  selector: 'app-alert-box',
  templateUrl: './alert-box.component.html',
  styleUrls: ['./alert-box.component.css']
})
export class AlertBoxComponent implements OnInit {
  alertTitle: string = ''
  alertMessage: string = ''
  @Input() errorCode: number = 0
  @Input() cityName: string = ''
  faInfo = faInfo

  ngOnInit(): void {
    this.getErrorStatus()
  }

  getErrorStatus() {
    if(this.cityName === ''){
      this.alertTitle = 'Warning'
      this.alertMessage = 'Please search for a city..'
    }
    if(this.errorCode === 404){
      this.alertTitle = 'Error'
      this.alertMessage = 'Please enter a valid city..'
    }
  }
}
