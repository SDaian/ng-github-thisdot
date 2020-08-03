export class User {
  html_url: string;
  avatar_url: string;
  login: string;
  followers_url: string;
  followersCount: number;
  repos_url: string;
  repos: [];
  privacy: Privacy;
  url: string;
}

export class Privacy {
  name: string;
  login: string;
  email: string;
  location: string;
  followers: number;
  following: number;
  public_repos: number;
  blog: string;
}
