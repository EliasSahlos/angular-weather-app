import {Injectable, HostListener} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MobileViewFinderService {
  constructor() {
  }

  screenWidth: number = 0
  mobileView: boolean = false

  @HostListener('window:resize', ['$event'])
  mobileViewChecker(event?: any) {
    this.screenWidth = event ? event.target.innerWidth : window.innerWidth;
    this.mobileViewHandler()
    console.log("SCREENWIDTH FROM SERVICE", this.screenWidth)
    console.log("MOBILE VIEW FROM SERVICE", this.mobileView)
  }

  private mobileViewHandler() {
    if (this.screenWidth > 480) {
      this.mobileView = false
    } else {
      this.mobileView = true
    }
  }

  getMobileViewValue(){
    return this.mobileView
  }
}
