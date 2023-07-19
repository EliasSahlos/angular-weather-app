import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SaveCityTriggerService {
  constructor() { }

  private saveCitySubject = new Subject<void>()
  saveCity$ = this.saveCitySubject.asObservable()

  triggerSaveCity(){
    this.saveCitySubject.next()
  }
}
