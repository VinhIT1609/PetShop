import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrl: './sing-in.component.css'
})
export class SingInComponent {
  imgPath: string = 'assets/img/14710.jpg'
  @Input() isVisibility!: boolean;
  @Input() iconValue: string = 'visibility';
  @Input() iconValue_CFPW: string = 'visibility';
  @Input() pwType: string = 'password';
  @Input() pwType_CFPW: string = 'password';

  //function
  changeStatusPW(value: string) {
    if (value == 'visibility') {
      this.iconValue = 'visibility_off';
      this.pwType = 'text';
    } else {
      this.iconValue = 'visibility';
      this.pwType = 'password';
    }
  }

  changeStatusPW_CFPW(value: string) {
    if (value == 'visibility') {
      this.iconValue_CFPW = 'visibility_off';
      this.pwType_CFPW = 'text';
    } else {
      this.iconValue_CFPW = 'visibility';
      this.pwType_CFPW = 'password';
    }
  }
}
