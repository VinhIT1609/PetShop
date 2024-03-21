import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {
  //css value
  isActive: boolean = false;
  activedItem!: number;
  menuItems: string[] = [
    'Home',
    'Account',
    'Branch',
    'Product',
    'Pet',
    'Keeping',
    'Promotion',
    'Report',
  ];
  iconItems: string[] = [
    'home',
    'group',
    'location_away',
    'package_2',
    'pets',
    'garage_home',
    'heap_snapshot_large',
    'lab_profile',
  ];
  //function
  handleClick(id: number) {
    this.activedItem = id;
  }
}
