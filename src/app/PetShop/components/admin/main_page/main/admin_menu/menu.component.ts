import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {
  constructor(private router: Router) {}

  //CSS value
  activedLi_Pet!: number;
  activedLi_Product!: number;
  isActive: boolean = false;
  isActive_Submenu_Pet: boolean = false;
  isActive_Submenu_Product: boolean = false;
  isActive_arrowDown: boolean = false;
  isActive_subMenu_Li: boolean = false;
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
  menuIcons: string[] = ['home', 'pets', 'package_2'];

  // danh sách các button của menu
  menuButtons: string[] = [
    'TRANG CHỦ',
    'QL Thú Cưng',
    'QL Sản Phẩm',
    'CT Khuyến Mãi',
  ];
  // danh sách các submenu
  subMenu_Pet: string[] = ['DS Thú Cưng', 'Phân Loại', 'KS Thú Cưng'];
  subMenu_Product: string[] = ['DS Sản Phẩm', 'Phân Loại'];
  // danh sách icon của các submenu
  subMenu_Pet_Icons: string[] = ['list_alt', 'category', 'bed'];
  subMenu_Product_Icons: string[] = ['list_alt', 'category'];
  // danh sách functions

  backtoMainPage() {
    this.router.navigate(['/MainPage']);
  }

  // activeButton(index: any) {
  //   let arrow_icons = document.querySelectorAll('.arrow_icons');
  //   switch (index) {
  //     case 1:
  //       this.isActive_Submenu_Pet = !this.isActive_Submenu_Pet;
  //       if (
  //         arrow_icons[index - 1].classList.contains(
  //           'change_arrow_direction_down'
  //         )
  //       ) {
  //         arrow_icons[index - 1].classList.remove(
  //           'change_arrow_direction_down'
  //         );
  //       } else {
  //         arrow_icons[index - 1].classList.add('change_arrow_direction_down');
  //       }
  //       break;
  //     case 2:
  //       this.isActive_Submenu_Product = !this.isActive_Submenu_Product;
  //       if (
  //         arrow_icons[index - 1].classList.contains(
  //           'change_arrow_direction_down'
  //         )
  //       ) {
  //         arrow_icons[index - 1].classList.remove(
  //           'change_arrow_direction_down'
  //         );
  //       } else {
  //         arrow_icons[index - 1].classList.add('change_arrow_direction_down');
  //       }
  //       break;
  //   }
  // }

  // activeSubmenu_Li(index: any, subMenu: any) {
  //   switch (subMenu) {
  //     case 'pet':
  //       document
  //         .querySelector('.sub_menu_li_actived')
  //         ?.classList.remove('sub_menu_li_actived');
  //       this.activedLi_Pet = index;
  //       break;
  //     case 'product':
  //       document
  //         .querySelector('.sub_menu_li_actived')
  //         ?.classList.remove('sub_menu_li_actived');
  //       this.activedLi_Product = index;
  //       // route qua các master
  //       if (index == 0) {
  //         this.redirectRoute('Product');
  //       }
  //       break;
  //   }
  // }

  //hàm chuyển hướng route
  redirectRoute(index: number) {
    console.log(index);
    switch (index) {
      case 1:
        this.router.navigate(['Admin/Pet']);
        break;
      case 2:
        this.router.navigate(['Admin/Product']);
        break;
    }
  }
}
