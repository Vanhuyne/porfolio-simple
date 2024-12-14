import { Component } from '@angular/core';
import { AppComponent } from '../../app.component';
import { WeatherServiceService } from '../../serivce/weather-service.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  weatherData: any;
  activeLink: string = "";
  constructor(
    private appComponent: AppComponent,
    private weatherService: WeatherServiceService,
    private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.activeLink = event.urlAfterRedirects;
      }
    });
  }

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

  isActive(link: string): boolean {
    return this.activeLink === link;
  }
}
