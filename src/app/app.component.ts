import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Porfolio';
  isDarkMode = true;

  ngOnInit() {
    // Initialize theme from localStorage or system preference
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme) {
      // Use saved theme preference
      this.isDarkMode = savedTheme === 'light';
    } else {
      // Set default dark theme if no preference saved
      this.isDarkMode = false;
      localStorage.setItem('theme', 'light');
    }
    this.updateTheme();
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
    this.updateTheme();
  }

  private updateTheme() {
    if (this.isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
}
