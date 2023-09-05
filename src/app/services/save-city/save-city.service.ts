import {Injectable,} from '@angular/core';
import { SavedCities } from 'src/types/weatherData';

@Injectable({
  providedIn: 'root'
})
export class SaveCityService {

  constructor() {
  }

  savedCities: SavedCities[] = []

  addCityToArr(weatherData:any,cityName:string){
    const combinedData = {...weatherData, cityName: cityName}
    this.savedCities.push(combinedData)
    console.log('ADDED CITY TO ARR')
  }

  removeCityFromArr(city:any,index: number){
    this.savedCities.splice(index,1)
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
