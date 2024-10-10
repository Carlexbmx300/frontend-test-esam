import { Component } from '@angular/core';
import { MenuItems } from 'src/app/models/constants/global.constants';
import { IMenuItem } from 'src/app/models/global.interface';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent {
  items:IMenuItem[] = MenuItems;
  title:string="Menu principal"
}
