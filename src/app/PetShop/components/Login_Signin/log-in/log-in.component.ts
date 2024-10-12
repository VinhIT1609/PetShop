import { Component, Input, } from '@angular/core';



@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent {
  imgPath: string = 'assets/img/14710.jpg'
  @Input() isVisibility!: boolean;
  @Input() iconValue: string = 'visibility';
  @Input() pwType: string = 'password';
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
}
