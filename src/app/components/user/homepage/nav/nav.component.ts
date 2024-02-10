import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  navHomePage: string[] = ['Chó', 'Mèo', 'Thiết bị thông minh', 'Dịch vụ chăm sóc', 'Khuyến mãi'];
  subNavDog: string[] = ['Thức ăn cho chó', 'Phụ kiện', 'Bánh thưởng', 'Chăm sóc vệ sinh', 'Chăm sóc sức khỏe', 'Đồ chơi', 'Vận chuyển'];
  //function
  onMouseSubnav(navItem: string) {
    console.log(navItem);
  }
}
