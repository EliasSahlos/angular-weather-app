import {Injectable,} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SaveCityService {

  constructor() {
  }

  savedCities: any = []

  addCityToArr(weatherData:any,cityName:string){
    const combinedData = {...weatherData, cityName: cityName}
    this.savedCities.push(combinedData)
    console.log('ADDED CITY TO ARR')
  }

  removeCityFromArr(){
    console.log('REMOVED CITY FROM ARR')
  }

  clearCities(){
    this.savedCities = []
    console.log('CLEARED ARR')
  }

  getCities(){
    return this.savedCities
  }
}
