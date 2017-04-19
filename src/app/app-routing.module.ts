import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WeatherComponent }      from './weather/weather.component';
import { HomeComponent }      from './home/home.component';
import { WeatherDetailComponent }      from './weather/weather-detail.component';

const routes: Routes = [
  // { path: '',     component: HomeComponent },
  { path: '',     component: WeatherComponent },
  { path: 'weather/:suburb', component: WeatherDetailComponent }
  // { path: 'weather',     component: WeatherComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
