import { Component, Input } from '@angular/core';
import { IMenuItem } from 'src/app/models/global.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() items:IMenuItem[];
  @Input() title:string;
}
