import { Component } from '@angular/core';
import { AppComponent } from '../../app.component';
import { WeatherServiceService } from '../../serivce/weather-service.service';
import { Router, NavigationEnd } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserProfile } from '../../interface/UserProfile';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  activeLink: string = "";
  profileData: UserProfile | undefined;
  
  constructor(
    private appComponent: AppComponent,
    
    private router: Router,
    private http: HttpClient
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
   
    this.loadProfileData();
  }

  loadProfileData(): void {
    this.http.get<UserProfile>('assets/data/profile.json').subscribe(data => {
      this.profileData = data;
      console.log(this.profileData);
    });
  }

  

  isActive(link: string): boolean {
    return this.activeLink === link;
  }
}
