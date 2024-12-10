import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';



@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {
  private apiKey = environment.weatherApiKey;
  private baseUrl = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http : HttpClient) { }

  // Coordinates for Ho Chi Minh City
  private hcmLatitude = 10.8231;
  private hcmLongitude = 106.6297;

  // get weather data for Ho Chi Minh City
  getWeatherData() {
    const url = `${this.baseUrl}?lat=${this.hcmLatitude}&lon=${this.hcmLongitude}&appid=${this.apiKey}&units=metric`;
    return this.http.get(url);
  }

}
