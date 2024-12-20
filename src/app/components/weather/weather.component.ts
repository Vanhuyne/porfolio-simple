import { Component, OnInit } from '@angular/core';
import { WeatherServiceService } from '../../serivce/weather-service.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent implements OnInit {
  weatherData: any;
  constructor(
    private weatherService: WeatherServiceService,
  ) { }

  ngOnInit(): void {
    this.weatherService.getWeatherData().subscribe(data => {
      this.weatherData = data;
    });
  }

  getWeatherIcon(): string {
    if (!this.weatherData || !this.weatherData.main || !this.weatherData.weather || !this.weatherData.wind) {
      return '🌞'; // Default icon if data is missing
    }

    const { temp } = this.weatherData.main;
    const { speed: windSpeed } = this.weatherData.wind;
    const description = this.weatherData.weather[0].description.toLowerCase();

    const iconMapping: { [key: string]: string } = {
      rain: '🌧️',
      cloud: '⛅',
      windy: '💨',
      hot: '🌞🔥',
      warm: '🌞',
      mild: '☀️',
    };

    if (description.includes('rain')) {
      return iconMapping['rain'];
    }
    if (description.includes('cloud')) {
      return iconMapping['cloud'];
    }
    if (windSpeed > 5) {
      return iconMapping['windy'];
    }
    if (temp > 35) {
      return iconMapping['hot'];
    }
    if (temp > 30) {
      return iconMapping['warm'];
    }
    if (temp > 25) {
      return iconMapping['mild'];
    }

    return '🌞'; // Default icon if no conditions match
  }

}
