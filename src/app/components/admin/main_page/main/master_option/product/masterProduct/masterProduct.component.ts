import { CommonModule, JsonPipe } from '@angular/common';
import { Component, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-masterProduct',
  templateUrl: './masterProduct.component.html',
  styleUrls: ['./masterProduct.component.css'],
})
export class MasterProductComponent implements OnInit {
  // CSS value
  custable_maxWidth_Product: number = 1000;
  custable_maxHeight_Product: number = 300;
  isOpenForm: boolean = false;
  //value
  totalProducts: number = 100;
  active: number = 100;
  deactive: number = 100;
  outofstock: number = 100;
  dataSource: any[] = [
    {
      id: 1,
      loaisp: 'food',
      tensp: 'Bot Chien',
    },
    {
      id: 2,
      loaisp: 'water',
      tensp: 'Watermelon Juice',
    },
    {
      id: 3,
      loaisp: 'food',
      tensp: 'Com Chien',
    },
    {
      id: 4,
      loaisp: 'water',
      tensp: 'Coca',
    },
  ];
  itemCbb: any = {
    id: null,
    loaisp: 'food',
    tensp: 'Bot Chien',
  };
  //table value
  actionProductValues: any[] = [
    { action: 'view', icon: 'visibility' },
    { action: 'update', icon: 'edit' },
    { action: 'delete', icon: 'delete' },
  ];
  headerProduct: any[] = [
    { Head: 'Product Name', FieldName: 'name' },
    { Head: 'Image', FieldName: 'image' },
    { Head: 'Price', FieldName: 'price' },
    { Head: 'Quantity', FieldName: 'quantity' },
    { Head: 'Status', FieldName: 'status' },
    { Head: 'Category', FieldName: 'category' },
  ];
  productList: any = [
    {
      id: 1,
      name: 'pate cho',
      image: 'link',
      price: 20000,
      quantity: 200,
      status: true,
      category: 'meo',
    },
    {
      id: 2,
      name: 'pate meo',
      image: 'link',
      price: 20000,
      quantity: 200,
      status: true,
      category: 'meo',
    },
    {
      id: 3,
      name: 'thuoc tieu chay',
      image: 'link',
      price: 30000,
      quantity: 150,
      status: false,
      category: 'thuoc',
    },
    {
      id: 1,
      name: 'pate cho',
      image: 'link',
      price: 20000,
      quantity: 200,
      status: true,
      category: 'meo',
    },
    {
      id: 2,
      name: 'pate meo',
      image: 'link',
      price: 20000,
      quantity: 200,
      status: true,
      category: 'meo',
    },
    {
      id: 3,
      name: 'thuoc tieu chay',
      image: 'link',
      price: 30000,
      quantity: 150,
      status: false,
      category: 'thuoc',
    },
    {
      id: 1,
      name: 'pate cho',
      image: 'link',
      price: 20000,
      quantity: 200,
      status: true,
      category: 'meo',
    },
    {
      id: 2,
      name: 'pate meo',
      image: 'link',
      price: 20000,
      quantity: 200,
      status: true,
      category: 'meo',
    },
    {
      id: 3,
      name: 'thuoc tieu chay',
      image: 'link',
      price: 30000,
      quantity: 150,
      status: false,
      category: 'thuoc',
    },
    {
      id: 1,
      name: 'pate cho',
      image: 'link',
      price: 20000,
      quantity: 200,
      status: true,
      category: 'meo',
    },
    {
      id: 2,
      name: 'pate meo',
      image: 'link',
      price: 20000,
      quantity: 200,
      status: true,
      category: 'meo',
    },
    {
      id: 3,
      name: 'thuoc tieu chay',
      image: 'link',
      price: 30000,
      quantity: 150,
      status: false,
      category: 'thuoc',
    },
    {
      id: 1,
      name: 'pate cho',
      image: 'link',
      price: 20000,
      quantity: 200,
      status: true,
      category: 'meo',
    },
    {
      id: 2,
      name: 'pate meo',
      image: 'link',
      price: 20000,
      quantity: 200,
      status: true,
      category: 'meo',
    },
    {
      id: 3,
      name: 'thuoc tieu chay',
      image: 'link',
      price: 30000,
      quantity: 150,
      status: false,
      category: 'thuoc',
    },
    {
      id: 1,
      name: 'pate cho',
      image: 'link',
      price: 20000,
      quantity: 200,
      status: true,
      category: 'meo',
    },
    {
      id: 2,
      name: 'pate meo',
      image: 'link',
      price: 20000,
      quantity: 200,
      status: true,
      category: 'meo',
    },
    {
      id: 3,
      name: 'thuoc tieu chay',
      image: 'link',
      price: 30000,
      quantity: 150,
      status: false,
      category: 'thuoc',
    },
    {
      id: 1,
      name: 'pate cho',
      image: 'link',
      price: 20000,
      quantity: 200,
      status: true,
      category: 'meo',
    },
    {
      id: 2,
      name: 'pate meo',
      image: 'link',
      price: 20000,
      quantity: 200,
      status: true,
      category: 'meo',
    },
    {
      id: 3,
      name: 'thuoc tieu chay',
      image: 'link',
      price: 30000,
      quantity: 150,
      status: false,
      category: 'thuoc',
    },
    {
      id: 3,
      name: 'thuoc tieu chay',
      image: 'link',
      price: 30000,
      quantity: 150,
      status: false,
      category: 'thuoc',
    },
    {
      id: 1,
      name: 'pate cho',
      image: 'link',
      price: 20000,
      quantity: 200,
      status: true,
      category: 'meo',
    },
    {
      id: 2,
      name: 'pate meo',
      image: 'link',
      price: 20000,
      quantity: 200,
      status: true,
      category: 'meo',
    },
    {
      id: 3,
      name: 'thuoc tieu chay',
      image: 'link',
      price: 30000,
      quantity: 150,
      status: false,
      category: 'thuoc',
    },
    {
      id: 3,
      name: 'thuoc tieu chay',
      image: 'link',
      price: 30000,
      quantity: 150,
      status: false,
      category: 'thuoc',
    },
    {
      id: 1,
      name: 'pate cho',
      image: 'link',
      price: 20000,
      quantity: 200,
      status: true,
      category: 'meo',
    },
    {
      id: 2,
      name: 'pate meo',
      image: 'link',
      price: 20000,
      quantity: 200,
      status: true,
      category: 'meo',
    },
    {
      id: 3,
      name: 'thuoc tieu chay',
      image: 'link',
      price: 30000,
      quantity: 150,
      status: false,
      category: 'thuoc',
    },
    {
      id: 3,
      name: 'thuoc tieu chay',
      image: 'link',
      price: 30000,
      quantity: 150,
      status: false,
      category: 'thuoc',
    },
    {
      id: 1,
      name: 'pate cho',
      image: 'link',
      price: 20000,
      quantity: 200,
      status: true,
      category: 'meo',
    },
    {
      id: 2,
      name: 'pate meo',
      image: 'link',
      price: 20000,
      quantity: 200,
      status: true,
      category: 'meo',
    },
    {
      id: 3,
      name: 'thuoc tieu chay',
      image: 'link',
      price: 30000,
      quantity: 150,
      status: false,
      category: 'thuoc',
    },
    {
      id: 3,
      name: 'thuoc tieu chay',
      image: 'link',
      price: 30000,
      quantity: 150,
      status: false,
      category: 'thuoc',
    },
    {
      id: 1,
      name: 'pate cho',
      image: 'link',
      price: 20000,
      quantity: 200,
      status: true,
      category: 'meo',
    },
    {
      id: 2,
      name: 'pate meo',
      image: 'link',
      price: 20000,
      quantity: 200,
      status: true,
      category: 'meo',
    },
    {
      id: 3,
      name: 'thuoc tieu chay',
      image: 'link',
      price: 30000,
      quantity: 150,
      status: false,
      category: 'thuoc',
    },
    {
      id: 3,
      name: 'thuoc tieu chay',
      image: 'link',
      price: 30000,
      quantity: 150,
      status: false,
      category: 'thuoc',
    },
    {
      id: 1,
      name: 'pate cho',
      image: 'link',
      price: 20000,
      quantity: 200,
      status: true,
      category: 'meo',
    },
    {
      id: 2,
      name: 'pate meo',
      image: 'link',
      price: 20000,
      quantity: 200,
      status: true,
      category: 'meo',
    },
    {
      id: 3,
      name: 'thuoc tieu chay',
      image: 'link',
      price: 30000,
      quantity: 150,
      status: false,
      category: 'thuoc',
    },
    {
      id: 3,
      name: 'thuoc tieu chay',
      image: 'link',
      price: 30000,
      quantity: 150,
      status: false,
      category: 'thuoc',
    },
    {
      id: 1,
      name: 'pate cho',
      image: 'link',
      price: 20000,
      quantity: 200,
      status: true,
      category: 'meo',
    },
    {
      id: 2,
      name: 'pate meo',
      image: 'link',
      price: 20000,
      quantity: 200,
      status: true,
      category: 'meo',
    },
    {
      id: 3,
      name: 'thuoc tieu chay',
      image: 'link',
      price: 30000,
      quantity: 150,
      status: false,
      category: 'thuoc',
    },
    {
      id: 3,
      name: 'thuoc tieu chay',
      image: 'link',
      price: 30000,
      quantity: 150,
      status: false,
      category: 'thuoc',
    },
    {
      id: 1,
      name: 'pate cho',
      image: 'link',
      price: 20000,
      quantity: 200,
      status: true,
      category: 'meo',
    },
    {
      id: 2,
      name: 'pate meo',
      image: 'link',
      price: 20000,
      quantity: 200,
      status: true,
      category: 'meo',
    },
    {
      id: 3,
      name: 'thuoc tieu chay',
      image: 'link',
      price: 30000,
      quantity: 150,
      status: false,
      category: 'thuoc',
    },
    {
      id: 3,
      name: 'thuoc tieu chay',
      image: 'link',
      price: 30000,
      quantity: 150,
      status: false,
      category: 'thuoc',
    },
    {
      id: 1,
      name: 'pate cho',
      image: 'link',
      price: 20000,
      quantity: 200,
      status: true,
      category: 'meo',
    },
    {
      id: 2,
      name: 'pate meo',
      image: 'link',
      price: 20000,
      quantity: 200,
      status: true,
      category: 'meo',
    },
    {
      id: 3,
      name: 'thuoc tieu chay',
      image: 'link',
      price: 30000,
      quantity: 150,
      status: false,
      category: 'thuoc',
    },
    {
      id: 3,
      name: 'thuoc tieu chay',
      image: 'link',
      price: 30000,
      quantity: 150,
      status: false,
      category: 'thuoc',
    },
    {
      id: 1,
      name: 'pate cho',
      image: 'link',
      price: 20000,
      quantity: 200,
      status: true,
      category: 'meo',
    },
    {
      id: 2,
      name: 'pate meo',
      image: 'link',
      price: 20000,
      quantity: 200,
      status: true,
      category: 'meo',
    },
    {
      id: 3,
      name: 'thuoc tieu chay',
      image: 'link',
      price: 30000,
      quantity: 150,
      status: false,
      category: 'thuoc',
    },
    {
      id: 3,
      name: 'thuoc tieu chay',
      image: 'link',
      price: 30000,
      quantity: 150,
      status: false,
      category: 'thuoc',
    },
    {
      id: 1,
      name: 'pate cho',
      image: 'link',
      price: 20000,
      quantity: 200,
      status: true,
      category: 'meo',
    },
    {
      id: 2,
      name: 'pate meo',
      image: 'link',
      price: 20000,
      quantity: 200,
      status: true,
      category: 'meo',
    },
    {
      id: 3,
      name: 'thuoc tieu chay',
      image: 'link',
      price: 30000,
      quantity: 150,
      status: false,
      category: 'thuoc',
    },
    {
      id: 3,
      name: 'thuoc tieu chay',
      image: 'link',
      price: 30000,
      quantity: 150,
      status: false,
      category: 'thuoc',
    },
    {
      id: 1,
      name: 'pate cho',
      image: 'link',
      price: 20000,
      quantity: 200,
      status: true,
      category: 'meo',
    },
    {
      id: 2,
      name: 'pate meo',
      image: 'link',
      price: 20000,
      quantity: 200,
      status: true,
      category: 'meo',
    },
    {
      id: 3,
      name: 'thuoc tieu chay',
      image: 'link',
      price: 30000,
      quantity: 150,
      status: false,
      category: 'thuoc',
    },
    {
      id: 3,
      name: 'thuoc tieu chay',
      image: 'link',
      price: 30000,
      quantity: 150,
      status: false,
      category: 'thuoc',
    },
    {
      id: 1,
      name: 'pate cho',
      image: 'link',
      price: 20000,
      quantity: 200,
      status: true,
      category: 'meo',
    },
    {
      id: 2,
      name: 'pate meo',
      image: 'link',
      price: 20000,
      quantity: 200,
      status: true,
      category: 'meo',
    },
    {
      id: 3,
      name: 'thuoc tieu chay',
      image: 'link',
      price: 30000,
      quantity: 150,
      status: false,
      category: 'thuoc',
    },
    {
      id: 3,
      name: 'thuoc tieu chay',
      image: 'link',
      price: 30000,
      quantity: 150,
      status: false,
      category: 'thuoc',
    },
    {
      id: 1,
      name: 'pate cho',
      image: 'link',
      price: 20000,
      quantity: 200,
      status: true,
      category: 'meo',
    },
    {
      id: 2,
      name: 'pate meo',
      image: 'link',
      price: 20000,
      quantity: 200,
      status: true,
      category: 'meo',
    },
    {
      id: 3,
      name: 'thuoc tieu chay',
      image: 'link',
      price: 30000,
      quantity: 150,
      status: false,
      category: 'thuoc',
    },
    {
      id: 3,
      name: 'thuoc tieu chay',
      image: 'link',
      price: 30000,
      quantity: 150,
      status: false,
      category: 'thuoc',
    },
    {
      id: 1,
      name: 'pate cho',
      image: 'link',
      price: 20000,
      quantity: 200,
      status: true,
      category: 'meo',
    },
    {
      id: 2,
      name: 'pate meo',
      image: 'link',
      price: 20000,
      quantity: 200,
      status: true,
      category: 'meo',
    },
    {
      id: 3,
      name: 'thuoc tieu chay',
      image: 'link',
      price: 30000,
      quantity: 150,
      status: false,
      category: 'thuoc',
    },
    {
      id: 3,
      name: 'thuoc tieu chay',
      image: 'link',
      price: 30000,
      quantity: 150,
      status: false,
      category: 'thuoc',
    },
    {
      id: 1,
      name: 'pate cho',
      image: 'link',
      price: 20000,
      quantity: 200,
      status: true,
      category: 'meo',
    },
    {
      id: 2,
      name: 'pate meo',
      image: 'link',
      price: 20000,
      quantity: 200,
      status: true,
      category: 'meo',
    },
    {
      id: 1,
      name: 'pate cho',
      image: 'link',
      price: 20000,
      quantity: 200,
      status: true,
      category: 'meo',
    },
    {
      id: 2,
      name: 'pate meo',
      image: 'link',
      price: 20000,
      quantity: 200,
      status: true,
      category: 'meo',
    },
    {
      id: 1,
      name: 'pate cho',
      image: 'link',
      price: 20000,
      quantity: 200,
      status: true,
      category: 'meo',
    },
    {
      id: 2,
      name: 'pate meo',
      image: 'link',
      price: 20000,
      quantity: 200,
      status: true,
      category: 'meo',
    },
    {
      id: 1,
      name: 'pate cho',
      image: 'link',
      price: 20000,
      quantity: 200,
      status: true,
      category: 'meo',
    },
    {
      id: 2,
      name: 'pate meo',
      image: 'link',
      price: 20000,
      quantity: 200,
      status: true,
      category: 'meo',
    },
    {
      id: 1,
      name: 'pate cho',
      image: 'link',
      price: 20000,
      quantity: 200,
      status: true,
      category: 'meo',
    },
    {
      id: 2,
      name: 'pate meo',
      image: 'link',
      price: 20000,
      quantity: 200,
      status: true,
      category: 'meo',
    },
    {
      id: 1,
      name: 'pate cho',
      image: 'link',
      price: 20000,
      quantity: 200,
      status: true,
      category: 'meo',
    },
    {
      id: 2,
      name: 'pate meo',
      image: 'link',
      price: 20000,
      quantity: 200,
      status: true,
      category: 'meo',
    },
    {
      id: 1,
      name: 'pate cho',
      image: 'link',
      price: 20000,
      quantity: 200,
      status: true,
      category: 'meo',
    },
    {
      id: 2,
      name: 'pate meo',
      image: 'link',
      price: 20000,
      quantity: 200,
      status: true,
      category: 'meo',
    },
    {
      id: 1,
      name: 'pate cho',
      image: 'link',
      price: 20000,
      quantity: 200,
      status: true,
      category: 'meo',
    },
    {
      id: 2,
      name: 'pate meo',
      image: 'link',
      price: 20000,
      quantity: 200,
      status: true,
      category: 'meo',
    },
    {
      id: 1,
      name: 'pate cho',
      image: 'link',
      price: 20000,
      quantity: 200,
      status: true,
      category: 'meo',
    },
    {
      id: 2,
      name: 'pate meo',
      image: 'link',
      price: 20000,
      quantity: 200,
      status: true,
      category: 'meo',
    },
    {
      id: 1,
      name: 'pate cho',
      image: 'link',
      price: 20000,
      quantity: 200,
      status: true,
      category: 'meo',
    },
    {
      id: 2,
      name: 'pate meo',
      image: 'link',
      price: 20000,
      quantity: 200,
      status: true,
      category: 'meo',
    },
    {
      id: 1,
      name: 'pate cho',
      image: 'link',
      price: 20000,
      quantity: 200,
      status: true,
      category: 'meo',
    },
    {
      id: 2,
      name: 'pate meo',
      image: 'link',
      price: 20000,
      quantity: 200,
      status: true,
      category: 'meo',
    },
    {
      id: 2,
      name: 'pate meo',
      image: 'link',
      price: 20000,
      quantity: 200,
      status: true,
      category: 'meo',
    },
  ];
  //function
  constructor() {}

  ngOnInit() {}

  addNewPD() {
    this.isOpenForm = !this.isOpenForm;
  }
  toggleShowOverlay() {
    this.isOpenForm = !this.isOpenForm;
  }
  propagation(event: Event) {
    console.log('click');
    event.stopPropagation();
  }
  // form add san pham
  isFormSubmited: boolean = false;
  productObjecy: any = {
    productName: '',
    image: '',
    price: '',
    quantity: '',
    status: '',
    category: '',
  };
  // temp data for form
  dataStatus: any[] = [
    {
      id: 1,
      status: 'Active',
      value: true,
    },
    {
      id: 2,
      status: 'Deactive',
      value: false,
    },
  ];
  dataCategory: any[] = [
    { id: 1, name: 'Dog Food Company', value: 'dog_company' },
    { id: 2, name: 'Cat Food Company', value: 'cat_company' },
    { id: 3, name: 'Toy Company', value: 'toy_company' },
  ];
}
