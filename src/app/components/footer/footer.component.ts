import { Component, Input } from '@angular/core';
import { SocialItems } from 'src/app/models/constants/global.constants';
import { ISocialItem } from 'src/app/models/global.interface';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
 @Input() text:string; 
 items:ISocialItem[] = SocialItems;
}
