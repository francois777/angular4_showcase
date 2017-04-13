import {Weather} from './weather';

export var WEATHERS: Weather[] = [
  {
    type: 'forecasts',
    id: 12622,
    attributes: {
      suburb: 'Robina',
      state: 'QLD',
      postcode: '4226',
      latitude: -28.0703,
      longitude: 153.3768,
      geo_point: '-28.07030000, 153.37680000',
      current: [
        {
          day_index: 0,
          date: '2017-04-12',
          day_name: 'Wednesday',
          min: 14,
          max: 28,
          temperature: 23.8,
          last_updated: '2017-04-12T05:44:53Z',
          last_updated_timezone: 'EST',
          icon_filename: 'possible_shower.gif',
          icon_phrase: 'Possible shower',
          relative_humidity: 73,
          chance_of_rain: 60,
          rainfall_since_9am: 0,
          wind_speed: 44,
          wind_speed_uom: 'km/h',
          wind_direction: 137,
          wind_direction_compass: 'SE',
          pressure: 1016,
          pressure_uom: 'hPa',
          wind_gust: 54,
          sunrise: '2017-04-12T06:02:00+1000',
          sunset: '2017-04-12T17:33:00+1000',
          uv_index: 8,
          uv_index_description: 'Very High'
        }
      ],
      data_source: [
        {
          abbreviation: 'WZ',
          name: 'Weatherzone Data',
          description: 'Data for Surf, Observation and Forecast',
          provider: 'Weatherzone',
          image_url: 'https://ls-webcore.s3.amazonaws.com/providers/weatherzone.png',
          display_text: 'Supplied by WeatherZone',
          provider_website: 'www.weatherzone.com.au',
          is_internal: false
        }
      ],
      forecast: [
        {
          day_index: 1,
          date: '2017-04-13',
          day_name: 'Tomorrow',
          min: 17,
          max: 27,
          icon_filename: 'possible_shower.gif',
          icon_phrase: 'Possible shower',
          wind: [
            {
              time: '09:00',
              speed: 20,
              speed_uom: 'km/h',
              direction: 'S'
            },
            {
              time: '15:00',
              speed: 19,
              speed_uom: 'km/h',
              direction: 'SSE'
            }
          ]
        },
        {
          day_index: 2,
          date: '2017-04-14',
          day_name: 'Friday',
          min: 15,
          max: 28,
          icon_filename: 'mostly_sunny.gif',
          icon_phrase: 'Mostly sunny',
          wind: [
            {
              time: '09:00',
              speed: 12,
              speed_uom: 'km/h',
              direction: 'SSW'
            },
            {
              time: '15:00',
              speed: 14,
              speed_uom: 'km/h',
              direction: 'SSE'
            }
          ]
        },
        {
          day_index: 3,
          date: '2017-04-15',
          day_name: 'Saturday',
          min: 14,
          max: 29,
          icon_filename: 'mostly_sunny.gif',
          icon_phrase: 'Mostly sunny',
          wind: [
            {
              time: '09:00',
              speed: 7,
              speed_uom: 'km/h',
              direction: 'SSW'
            },
            {
              time: '15:00',
              speed: 9,
              speed_uom: 'km/h',
              direction: 'ESE'
            }
          ]
        },
        {
          day_index: 4,
          date: '2017-04-16',
          day_name: 'Sunday',
          min: 15,
          max: 28,
          icon_filename: 'possible_shower.gif',
          icon_phrase: 'Possible shower',
          wind: [
            {
              time: '09:00',
              speed: 6,
              speed_uom: 'km/h',
              direction: 'W'
            },
            {
              time: '15:00',
              speed: 10,
              speed_uom: 'km/h',
              direction: 'ENE'
            }
          ]
        },
        {
          day_index: 5,
          date: '2017-04-17',
          day_name: 'Monday',
          min: 16,
          max: 29,
          icon_filename: 'mostly_sunny.gif',
          icon_phrase: 'Mostly sunny',
          wind: [
            {
              time: '09:00',
              speed: 4,
              speed_uom: 'km/h',
              direction: 'N'
            },
            {
              time: '15:00',
              speed: 11,
              speed_uom: 'km/h',
              direction: 'ENE'
            }
          ]
        }
      ]
    }
  }
];
