import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Weather } from './weather';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html'
})
export class WeatherComponent implements OnInit {
  weather: Weather[];
  selectedWeather: Weather;

  constructor(
    private router: Router,
    private weatherService: WeatherService) { }

  getWeather(): void {
    this.weatherService.getWeathers().then(weather => this.weather = weather);
    // this.weatherService.getWeather({suburb: 'Robina'}).then(weather => this.weather = weather);
  }

  ngOnInit(): void {
    this.getWeather();
  }

  onSelect(weather: Weather): void {
    this.selectedWeather = weather;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedWeather.id]);
  }
}
