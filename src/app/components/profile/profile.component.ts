import { Component, Input, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent {

  @Input() user: User;

  constructor() { }

  public openTab(): void {
    window.open(this.user.html_url, '_blank');
  }
}
