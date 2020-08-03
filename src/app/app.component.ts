import { Component, OnInit } from '@angular/core';

import { GithubSearchService } from './services/github-search.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'ng-github-thisdot';

  people$: Observable<any>;
  constructor(private service: GithubSearchService) {}

  ngOnInit(): void {}
}
