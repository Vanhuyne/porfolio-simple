import { Component } from '@angular/core';
import { UserProfile } from '../../interface/UserProfile';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-twitter-profile',
  templateUrl: './twitter-profile.component.html',
  styleUrls: ['./twitter-profile.component.css']
})
export class TwitterProfileComponent {
  profile!: UserProfile;
  activeTab: string = 'Post';
  constructor(private sanitizer: DomSanitizer, private http: HttpClient) {
    this.loadProfile().subscribe(profile => {
      this.profile = profile;

      this.profile.tweets.forEach(tweet => {
        if (tweet.gif) {
          tweet.gif = this.sanitizer.bypassSecurityTrustResourceUrl(tweet.gif as string);
        }
      });
    });
  }

  loadProfile(): Observable<UserProfile> {
    return this.http.get<UserProfile>('assets/data/profile.json');
  }

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}
