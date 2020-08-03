import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { GithubSearchService } from 'src/app/services/github-search.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { Pagination } from '../../models/pagination';

@Component({
  selector: 'app-profile-results',
  templateUrl: './profile-results.component.html',
  styleUrls: ['./profile-results.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileResultsComponent implements OnInit {

  profileResults$: Observable<User[]>;
  isSearching: Observable<boolean>;
  pagination: Observable<Pagination>;

  constructor(private service: GithubSearchService) { 
    this.profileResults$ = this.service.getSearchResults();
    this.isSearching = this.service.getIsSearching();
    this.pagination = this.service.getPagination();
    this.service.getUsers('daian');
  }

  ngOnInit(): void {
  }

}
