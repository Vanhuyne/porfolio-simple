import { Component } from '@angular/core';
import { UserProfile } from '../../interface/UserProfile';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-twitter-profile',
  templateUrl: './twitter-profile.component.html',
  styleUrls: ['./twitter-profile.component.css']
})
export class TwitterProfileComponent {
  profile: UserProfile;

  activeTab: string = 'Post';

  constructor(private sanitizer: DomSanitizer) {
    this.profile = {
      name: 'Van Huy',
      handle: '@ThanVanHuy25640',
      bio: 'Software Developer | Powered by caffeine ☕ , exercise every day 🚴‍♀️',
      followers: 50,
      following: 42,
      website: 'https://github.com/Vanhuyne',
      joined: 'July 2024',
      location: 'Viet Nam',
      profileImage: 'assets/avatar.png',
      coverImage: 'https://pbs.twimg.com/profile_banners/1866019820153507840/1733888976/1500x500',
      tweets: [
        {
          id: 1,
          text: 'People look at me like I\'m a weirdo! eccentric! 🤪 I just want to be myself!',
          likes: 4,
          retweets: 5,
          comments: 2,
          views: 200,
          bookmarks: 10,
          photo: 'assets/tweet-photo2.png',
          gif: this.sanitizer.bypassSecurityTrustResourceUrl('https://giphy.com/embed/gVlgj80ZLp9yo'),
          timestamp: 'Dec 9'
        }
      ]
    };
  }

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}
