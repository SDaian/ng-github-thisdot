import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { GithubSearchService } from 'src/app/services/github-search.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchBarComponent{

  formData = new FormGroup({
    user: new FormControl(''),
  });

  constructor(private service: GithubSearchService) { }

  public onSubmit(): void {
    this.service.getUsers(this.formData.get('user').value);
  }

}
