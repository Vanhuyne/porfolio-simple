import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private appComponent: AppComponent) {}

  get isDarkMode(): boolean {
    return this.appComponent.isDarkMode;
  }

  toggleTheme(): void {
    this.appComponent.toggleTheme();
  }

}
