import {Weather} from './weather';
import {WEATHERS} from './mock-weather';
import {Injectable} from '@angular/core';
import {Http, URLSearchParams} from '@angular/http';

@Injectable()
export class WeatherService {
  private weatherAPI = 'http://www-beta.localsearch.com.au/api/data/v2/forecasts';  // URL to web API

  constructor(private http: Http) {
  }

  getWeathers(): Promise<Weather[]> {
    console.log('WEATHERS MOCK', WEATHERS)
    return Promise.resolve(WEATHERS);
  }

  getWeathersSlowly(): Promise<Weather[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getWeathers()), 2000);
    });
  }

  //
  // getWeather(suburb: string): Promise<Weather> {
  //   return this.http
  //     .get(this.weatherAPI + '?filter[suburb]=' + suburb);
  // }

}
