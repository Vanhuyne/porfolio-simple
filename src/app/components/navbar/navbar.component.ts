import { Component } from '@angular/core';
import { AppComponent } from '../../app.component';
import { WeatherServiceService } from '../../serivce/weather-service.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  weatherData: any;

  constructor(
    private appComponent: AppComponent,
    private weatherService: WeatherServiceService) {}
  
  get isDarkMode(): boolean {
    return this.appComponent.isDarkMode;
  }

  toggleTheme(): void {
    this.appComponent.toggleTheme();
  }

  ngOnInit() {
    this.weatherService.getWeatherData().subscribe(data => {
      this.weatherData = data;
      console.log(this.weatherData);
      
    });
  }

  // Refined Weather Icon Method for Vietnam's Climate
  getWeatherIcon(): string {
    if (!this.weatherData) return '🌞';

    const temp = this.weatherData.main.temp;
    const windSpeed = this.weatherData.wind.speed;
    const description = this.weatherData.weather[0].description.toLowerCase();

    // Check for specific weather conditions
    if (description.includes('rain')) return '🌧️';
    if (description.includes('cloud')) return '⛅';
    if (windSpeed > 5) return '💨'; // Windy condition
    
    // Temperature-based icons with a focus on sunny conditions
    if (temp > 35) return '🌞🔥'; // Very hot
    if (temp > 30) return '🌞';   // Hot and sunny
    if (temp > 25) return '☀️';   // Warm and sunny
    
    return '🌞'; // Default to sunny
  }

}
