import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-masterProduct',
  templateUrl: './masterProduct.component.html',
  styleUrls: ['./masterProduct.component.css']
})
export class MasterProductComponent implements OnInit {
  //value
  totalProducts: number = 100;
  active: number = 100;
  deactive: number = 100;
  outofstock: number = 100;
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
  //table value
  actionProductValues: any[] = [
    { 'action': 'view', 'icon': 'visibility' },
    { 'action': 'update', 'icon': 'edit' },
    { 'action': 'delete', 'icon': 'delete' }
  ];
  headerProduct: any[] = [
    { 'Head': 'Product Name', 'FieldName': 'name' },
    { 'Head': 'Image', 'FieldName': 'image' },
    { 'Head': 'Price', 'FieldName': 'price' },
    { 'Head': 'Quantity', 'FieldName': 'quantity' },
    { 'Head': 'Status', 'FieldName': 'status' },
    { 'Head': 'Category', 'FieldName': 'category' },

  ];
  productList: any = [
    {
      id: 1,
      name: 'pate cho',
      image: 'link',
      price: 20000,
      quantity: 200,
      status: true,
      category: 'meo'
    },
    {
      id: 2,
      name: 'pate meo',
      image: 'link',
      price: 20000,
      quantity: 200,
      status: true,
      category: 'meo'
    },
    {
      id: 3,
      name: 'thuoc tieu chay',
      image: 'link',
      price: 30000,
      quantity: 150,
      status: false,
      category: 'thuoc'
    },
    {
      id: 1,
      name: 'pate cho',
      image: 'link',
      price: 20000,
      quantity: 200,
      status: true,
      category: 'meo'
    },
    {
      id: 2,
      name: 'pate meo',
      image: 'link',
      price: 20000,
      quantity: 200,
      status: true,
      category: 'meo'
    },
    {
      id: 3,
      name: 'thuoc tieu chay',
      image: 'link',
      price: 30000,
      quantity: 150,
      status: false,
      category: 'thuoc'
    },
    {
      id: 1,
      name: 'pate cho',
      image: 'link',
      price: 20000,
      quantity: 200,
      status: true,
      category: 'meo'
    },
    {
      id: 2,
      name: 'pate meo',
      image: 'link',
      price: 20000,
      quantity: 200,
      status: true,
      category: 'meo'
    },
    {
      id: 3,
      name: 'thuoc tieu chay',
      image: 'link',
      price: 30000,
      quantity: 150,
      status: false,
      category: 'thuoc'
    },
    {
      id: 1,
      name: 'pate cho',
      image: 'link',
      price: 20000,
      quantity: 200,
      status: true,
      category: 'meo'
    },
    {
      id: 2,
      name: 'pate meo',
      image: 'link',
      price: 20000,
      quantity: 200,
      status: true,
      category: 'meo'
    },
    {
      id: 3,
      name: 'thuoc tieu chay',
      image: 'link',
      price: 30000,
      quantity: 150,
      status: false,
      category: 'thuoc'
    },
    {
      id: 1,
      name: 'pate cho',
      image: 'link',
      price: 20000,
      quantity: 200,
      status: true,
      category: 'meo'
    },
    {
      id: 2,
      name: 'pate meo',
      image: 'link',
      price: 20000,
      quantity: 200,
      status: true,
      category: 'meo'
    },
    {
      id: 3,
      name: 'thuoc tieu chay',
      image: 'link',
      price: 30000,
      quantity: 150,
      status: false,
      category: 'thuoc'
    },
    {
      id: 1,
      name: 'pate cho',
      image: 'link',
      price: 20000,
      quantity: 200,
      status: true,
      category: 'meo'
    },
    {
      id: 2,
      name: 'pate meo',
      image: 'link',
      price: 20000,
      quantity: 200,
      status: true,
      category: 'meo'
    },
    {
      id: 3,
      name: 'thuoc tieu chay',
      image: 'link',
      price: 30000,
      quantity: 150,
      status: false,
      category: 'thuoc'
    },
    {
      id: 1,
      name: 'pate cho',
      image: 'link',
      price: 20000,
      quantity: 200,
      status: true,
      category: 'meo'
    },
    {
      id: 2,
      name: 'pate meo',
      image: 'link',
      price: 20000,
      quantity: 200,
      status: true,
      category: 'meo'
    },
    {
      id: 3,
      name: 'thuoc tieu chay',
      image: 'link',
      price: 30000,
      quantity: 150,
      status: false,
      category: 'thuoc'
    },
  ];
  //function
  constructor() { }

  ngOnInit() {
  }
}