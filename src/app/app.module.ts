import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import {FormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {SearchBarComponent} from './components/search-bar/search-bar.component';
import {WeatherCardComponent} from './components/weather-card/weather-card.component';
import {CityTitleComponent} from './components/city-title/city-title.component';
import {AlertBoxComponent} from './components/alert-box/alert-box.component';
import {ErrorCatchingInterceptor} from "./services/error-catching-interceptor/error-catching.interceptor";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatTooltipModule} from "@angular/material/tooltip";
import { SaveCityButtonComponent } from './components/save-city-button/save-city-button.component';
import { SavedCitiesCardComponent } from './components/saved-cities-card/saved-cities-card.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    WeatherCardComponent,
    CityTitleComponent,
    AlertBoxComponent,
    SaveCityButtonComponent,
    SavedCitiesCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorCatchingInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
