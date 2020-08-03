import { Component, Input, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {

  @Input()user: User;
  constructor() { }

}
