import {Weather} from './weather';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherService {
  private weatherAPI = 'http://www-beta.localsearch.com.au/api/data/v2/forecasts';  // URL to web API

  constructor(private http: Http) {
  }

  getWeather(suburb: string): Promise<Weather> {
    const url = `${this.weatherAPI}/?filter[suburb]=${suburb}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data[0] as Weather)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
