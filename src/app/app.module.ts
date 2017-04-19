import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule }    from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent }         from './app.component';
import { WeatherComponent }      from './weather/weather.component';
import { HomeComponent }      from './home/home.component';
import { WeatherDetailComponent }      from './weather/weather-detail.component';

import { AppRoutingModule }     from './app-routing.module';
import { WeatherService } from './weather/weather.service';

import { WeatherIconPipe }    from './components/weather-icon.pipe';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
    HttpModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    WeatherComponent,
    WeatherDetailComponent,
    WeatherIconPipe
  ],
  providers: [ WeatherService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
