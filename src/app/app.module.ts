import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ContactComponent } from './components/contact/contact.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { TwitterProfileComponent } from './components/twitter-profile/twitter-profile.component';
import { FormsModule } from '@angular/forms';
import { WeatherComponent } from './components/weather/weather.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { ResumeComponent } from './components/resume/resume.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProjectsComponent,
    SkillsComponent,
    ContactComponent,
    NavbarComponent,
    TwitterProfileComponent,
    WeatherComponent,
    ResumeComponent,
  ],
  imports: [
    PdfViewerModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule)
