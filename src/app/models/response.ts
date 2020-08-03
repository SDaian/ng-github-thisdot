import { User } from './user';

export class GithubResponse {
  items: User[];
  total_count: number;
  page: number;
}
