import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, forkJoin, concat } from 'rxjs';
import { map, flatMap } from 'rxjs/operators';

import { GithubResponse } from '../models/response';
import { User, Privacy } from '../models/user';
import { Pagination } from '../models/pagination';

@Injectable({
  providedIn: 'root'
})
export class GithubSearchService {

  private searchResults = new BehaviorSubject<User[]>(null);
  private pagination = new BehaviorSubject<Pagination>(null);
  private isSearching = new BehaviorSubject<boolean>(false);

  private searchUsersEndpoint = `https://api.github.com/search/users?q=`;
  private usersPerPage = 10;

  constructor(private http: HttpClient) {}

  public getSearchResults(): Observable<any[]> {
    return this.searchResults.asObservable();
  }

  public getIsSearching(): Observable<boolean> {
    return this.isSearching.asObservable();
  }

  public getPagination(): Observable<Pagination> {
    return this.pagination.asObservable();
  }

  public getUsers(userString: string, page: number = 1): void {
    this.isSearching.next(true);
    const httpOptions = {
      headers: new HttpHeaders({})
    };
    const query = `${userString}&page=${page}&per_page=${this.usersPerPage}`;
    this.http.get(`${this.searchUsersEndpoint}${query}`).pipe(
      map((response: GithubResponse) => {
        this.pagination.next({
          perPage: this.usersPerPage,
          totalCount: response.total_count,
          actualPage: page,
          query: userString
        });
        return {
          items: response.items,
        };
      }),
      flatMap((response: GithubResponse) => {
        const userObservables: Observable<User>[] = response.items.map((user: User) => {
          console.log(`getting data for ${user.followers_url}`);
          const privacyObservable = this.getInfoByUrl(user.url).pipe(
            map((privacy: Privacy) => {
              user.privacy = privacy;
              return user;
            })
          );
          return concat(privacyObservable);
        });
        return forkJoin(userObservables);
      })
    ).subscribe((response: User[]) => {
      console.log(response);
      this.searchResults.next(response);
      this.isSearching.next(false);
    });
  }

  public getInfoByUrl(url: string): Observable<{}> {
    return this.http.get(`${url}`);
  }
}
