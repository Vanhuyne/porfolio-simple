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
    private router: Router
  ) {
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

  getWeatherIcon(): string {
    if (!this.weatherData) return '🌞';

    const { temp } = this.weatherData.main;
    const { speed: windSpeed } = this.weatherData.wind;
    const description = this.weatherData.weather[0].description.toLowerCase();

    if (description.includes('rain')) return '🌧️';
    if (description.includes('cloud')) return '⛅';
    if (windSpeed > 5) return '💨';

    if (temp > 35) return '🌞🔥';
    if (temp > 30) return '🌞';
    if (temp > 25) return '☀️';

    return '🌞';
  }

  isActive(link: string): boolean {
    return this.activeLink === link;
  }
}
