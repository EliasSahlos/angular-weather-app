import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertBoxHandlerService {
  constructor() {}

  alertTitle: string = ''
  alertMessage: string = ''
  isError:boolean = false

  setErrorStatus(cityName: string, errorCode: number) {
    if (!cityName) {
      this.alertTitle = 'Warning'
      this.alertMessage = 'Please search for a city..'
      this.isError = false
    }
    if (errorCode === 404) {
      this.alertTitle = 'Error'
      this.alertMessage = 'Please enter a valid city..'
      this.isError = true
    }
  }

  getAlertTitle() {
    return this.alertTitle
  }

  getAlertMessage() {
    return this.alertMessage
  }

  getIsError(){
    return this.isError
  }
}
