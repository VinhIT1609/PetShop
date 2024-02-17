import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-masterProduct',
  templateUrl: './masterProduct.component.html',
  styleUrls: ['./masterProduct.component.css']
})
export class MasterProductComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  dataSource: any[] = [
    {
      id: 1,
      loaisp: 'food',
      tensp: 'Bot Chien'
    },
    {
      id: 2,
      loaisp: 'water',
      tensp: 'Watermelon Juice'
    },
    {
      id: 3,
      loaisp: 'food',
      tensp: 'Com Chien'
    },
    {
      id: 4,
      loaisp: 'water',
      tensp: 'Coca'
    }
  ];
  itemCbb: any = {
    id: null,
    loaisp: 'food',
    tensp: 'Bot Chien'
  };
}
