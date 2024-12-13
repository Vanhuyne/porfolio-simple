import { SafeResourceUrl } from "@angular/platform-browser";

export interface Tweet {
    id: number;
    text: string;
    likes: number;
    retweets: number;
    timestamp: string;
    comments: number;
    views: number;
    bookmarks: number;
    photo: string;
    gif: SafeResourceUrl;
  }
  
export  interface UserProfile {
    name: string;
    handle: string;
    bio: string;
    website: string;
    followers: number;
    following: number;
    joined: string;
    profileImage: string;
    coverImage: string;
    tweets: Tweet[];
    location: string;
  }