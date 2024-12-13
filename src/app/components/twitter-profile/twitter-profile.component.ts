import { Component } from '@angular/core';
import { UserProfile } from '../../interface/UserProfile';

@Component({
  selector: 'app-twitter-profile',
  templateUrl: './twitter-profile.component.html',
  styleUrl: './twitter-profile.component.css'
})
export class TwitterProfileComponent {
  profile: UserProfile = {
    name: 'Van Huy',
    handle: '@ThanVanHuy25640',
    bio: 'Software Developer | Powered by caffeine ☕ , exercise every day 🚴‍♀️',
    followers: 50,
    following: 42,
    joined: 'July 2024',
    profileImage: 'assets/avatar.png',
    coverImage: 'https://pbs.twimg.com/profile_banners/1866019820153507840/1733888976/1500x500',
    tweets: [
      {
        id: 1,
        text: 'Excited to help developers build amazing web applications!',
        likes: 5432,
        retweets: 987,
        timestamp: '2h'
      },
      {
        id: 2,
        text: 'Angular and Tailwind make building modern web interfaces a breeze.',
        likes: 3210,
        retweets: 654,
        timestamp: '1d'
      }
    ]
  };
}
