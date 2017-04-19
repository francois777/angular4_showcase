import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { Weather }        from './weather';
import { WeatherService } from './weather.service';

@Component({
  selector: 'weather-detail',
  templateUrl: './weather-detail.component.html'
})
export class WeatherDetailComponent implements OnInit {
  today: Date;
  weather: Object;


  constructor(
    private weatherService: WeatherService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.weatherService.getWeather(params['suburb']))
      .subscribe(weather => this.weather = weather);
  }

  goBack(): void {
    this.location.back();
  }
}


/*
 Copyright 2017 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */
