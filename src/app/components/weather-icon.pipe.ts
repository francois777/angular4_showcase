import { Pipe, PipeTransform } from '@angular/core';

/*
 *
 * Usage:
 *   value | weatherIcon:exponent
 * Example:
 *   {{ 'possible-show' |  weatherIcon}}
 *   formats to: 'icon-xxxx'
 */
@Pipe({name: 'weatherIcon'})
export class WeatherIconPipe implements PipeTransform {
  transform(condition: string): string {
    let formatCondition = condition.toLowerCase();
    let icon = '';
    switch (formatCondition) {
      case 'clearing shower':
        icon = 'icon-weathersuncloudsrain';
        break;
      case 'cloudy':
        icon = 'icon-weatherclouds';
        break;
      case 'cloud and wind increasing':
        icon = 'icon-weathercloudsrain';
        break;
      case 'cloud & wind increasing':
        icon = 'icon-weathercloudswind';
        break;
      case 'cloud increasing':
        icon = 'icon-weatherclouds';
        break;
      case 'drizzle':
        icon = 'icon-weathercloudsrain';
        break;
      case 'drizzle clearing':
        icon = 'icon-weathersuncloudsrain';
        break;
      case 'fog then sunny':
        icon = 'icon-weatherfogsun';
        break;
      case 'frost then sunny':
        icon = 'icon-weatherfrostsun';
        break;
      case 'hazy':
        icon = 'icon-weatherfog';
        break;
      case 'heavy rain':
        icon = 'icon-weathercloudsrain';
        break;
      case 'heavy showers':
        icon = 'icon-weathercloudsrain';
        break;
      case 'increasing sunshine':
        icon = 'icon-weathersun';
        break;
      case 'late shower':
        icon = 'icon-weathercloudsrain';
        break;
      case 'late thunder':
        icon = 'icon-weatherstorm';
        break;
      case 'mostly cloudy':
        icon = 'icon-weatherclouds';
        break;
      case 'mostly sunny':
        icon = 'icon-weathersun';
        break;
      case 'overcast':
        icon = 'icon-weatherclouds';
        break;
      case 'possible shower':
        icon = 'icon-weathersuncloudsrain';
        break;
      case 'possible thunderstorm':
        icon = 'icon-weatherstorm';
        break;
      case 'rain':
        icon = 'icon-weathercloudsrain';
        break;
      case 'rain & snow':
        icon = 'icon-weatherrainsnow';
        break;
      case 'rain and snow':
        icon = 'icon-weatherrainsnow';
        break;
      case 'rain clearing':
        icon = 'icon-weathersuncloudsrain';
        break;
      case 'rain developing':
        icon = 'icon-weathercloudsrain';
        break;
      case 'rain tending to snow':
        icon = 'icon-weatherrainsnow';
        break;
      case 'showers':
        icon = 'icon-weathercloudsrain';
        break;
      case 'showers easing':
        icon = 'icon-weathercloudsrain';
        break;
      case 'showers increasing':
        icon = 'icon-weathercloudsrain';
        break;
      case 'snow':
        icon = 'icon-weathercloudssnow';
        break;
      case 'snow clearing':
        icon = 'icon-weathercloudssnow';
        break;
      case 'snow developing':
        icon = 'icon-weathercloudssnow';
        break;
      case 'snow showers':
        icon = 'icon-weatherrainsnow';
        break;
      case 'snow tending to rain':
        icon = 'icon-weatherrainsnow';
        break;
      case 'sunny':
        icon = 'icon-weathersun';
        break;
      case 'thunderstorms':
        icon = 'icon-weatherstorm';
        break;
      case 'thunderstorms clearing':
        icon = 'icon-weatherstorm';
        break;
      case 'windy':
        icon = 'icon-weatherwind';
        break;
      case 'windy with rain':
        icon = 'icon-weathercloudswindrain';
        break;
      case 'windy with showers':
        icon = 'icon-weathercloudswindrain';
        break;
      case 'windy with snow':
        icon = 'icon-weathercloudswindsnow';
        break;
      case 'wind and rain increasing':
        icon = 'icon-weathercloudswindrain';
        break;
      case 'wind and shower increasing':
        icon = 'icon-weathercloudswindrain';
        break;
      case 'moon rise':
        icon = 'icon-weathermoon7';
        break;
      case 'moon set':
        icon = 'icon-weathermoon7';
        break;
      case 'waning gibbous':
        icon = 'icon-weathermoon7';
        break;
      case 'new moon':
        icon = 'icon-weathermoon2';
        break;
      case 'last quarter':
        icon = 'icon-weathermoon4';
        break;
      case 'first quarter':
        icon = 'icon-weathermoon6';
        break;
      case 'full moon':
        icon = 'icon-weathermoon5';
        break;
      case 'n':
        icon = 'icon-generalarrownlarge';
        break;
      case 'nne':
        icon = 'icon-generalarrownnelarge';
        break;
      case 'ne':
        icon = 'icon-generalarrownelarge';
        break;
      case 'ene':
        icon = 'icon-generalarrowenelarge';
        break;
      case 'e':
        icon = 'icon-generalarrowelarge';
        break;
      case 'ese':
        icon = 'icon-generalarroweselarge';
        break;
      case 'se':
        icon = 'icon-generalarrowselarge';
        break;
      case 'sse':
        icon = 'icon-generalarrowsselarge';
        break;
      case 's':
        icon = 'icon-generalarrowslarge';
        break;
      case 'ssw':
        icon = 'icon-generalarrowsswlarge';
        break;
      case 'sw':
        icon = 'icon-generalarrowswlarge';
        break;
      case 'wsw':
        icon = 'icon-generalarrowwswlarge';
        break;
      case 'w':
        icon = 'icon-generalarrowwlarge';
        break;
      case 'wnw':
        icon = 'icon-generalarrowwnwlarge';
        break;
      case 'nw':
        icon = 'icon-generalarrownwlarge';
        break;
      case 'nnw':
        icon = 'icon-generalarrownnwlarge';
        break;
      default:
        icon = '';
    }

    return icon;
  }
}
