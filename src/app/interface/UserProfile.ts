export interface Tweet {
    id: number;
    text: string;
    likes: number;
    retweets: number;
    timestamp: string;
  }
  
export  interface UserProfile {
    name: string;
    handle: string;
    bio: string;
    followers: number;
    following: number;
    joined: string;
    profileImage: string;
    coverImage: string;
    tweets: Tweet[];
  }