import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
Router


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  imgPath: string = "assets/img/logo.png";


  ngOnInit() {
  }

  //router
  constructor(private router: Router) { }
  navigateToHome() {
    console.log('click');
    this.router.navigate(['MainPage']);
  }
}
