import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {
  private errorStatus: number = 0;

  constructor() {}

  setErrorStatus(status: number) {
    this.errorStatus = status
  }

  getErrorStatus() {
    return this.errorStatus
  }
}
