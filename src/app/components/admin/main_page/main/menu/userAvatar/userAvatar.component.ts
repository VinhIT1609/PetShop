import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userAvatar',
  templateUrl: './userAvatar.component.html',
  styleUrls: ['./userAvatar.component.css']
})
export class UserAvatarComponent implements OnInit {
  imgPath: string = "assets/img/logo.png";
  firstName: string = "Vinh";
  lastName: string = "Lai";
  userName: string = this.firstName + " " + this.lastName;

  constructor() { }

  ngOnInit() {
  }

}
