import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Weather } from './weather';
import { WeatherService } from './weather.service';

import 'rxjs/add/operator/map';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  providers: [ WeatherService ]
})
export class WeatherComponent implements OnInit {
  weather: Weather[];
  currentWeather: Weather;
  currentSuburb: String = 'Robina';

  constructor(
    private router: Router,
    private weatherService: WeatherService) { }

  ngOnInit(): void {
  }

  // Push a suburb name into the observable stream.
  searchWeather(suburb: string): void {
    this.router.navigate(['/weather', suburb]);
  }

}
