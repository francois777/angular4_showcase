import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule }    from '@angular/http';

import { AppComponent }         from './app.component';
import { WeatherComponent }      from './weather/weather.component';
import { HomeComponent }      from './home/home.component';

import { AppRoutingModule }     from './app-routing.module';
import { WeatherService } from './weather/weather.service';


// other imports
// import { MaterialModule } from '@angular/material';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
    HttpModule,
    // MaterialModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    WeatherComponent
  ],
  providers: [ WeatherService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
