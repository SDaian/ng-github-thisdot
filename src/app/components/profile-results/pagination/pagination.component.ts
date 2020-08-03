import { Component, ViewEncapsulation, ChangeDetectionStrategy, Input } from '@angular/core';
import { Pagination } from 'src/app/models/pagination';
import { GithubSearchService } from 'src/app/services/github-search.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginationComponent {

  @Input() pagination: Pagination;
  constructor(private service: GithubSearchService) { }

  get numberOfPages(): number {
    return Math.ceil(this.pagination.totalCount / this.pagination.perPage);
  }

  public getUsers(pageNumber: number): void {
    this.service.getUsers(this.pagination.query, pageNumber);
  }
}
