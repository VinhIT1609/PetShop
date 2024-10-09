import { Component, OnInit } from '@angular/core';
import { clear } from 'node:console';

@Component({
  selector: 'app-dialogPDCategory',
  templateUrl: './dialogPDCategory.component.html',
  styleUrls: ['./dialogPDCategory.component.css'],
})
export class DialogPDCategoryComponent implements OnInit {
  //value
  isOpenForm: boolean = false;
  isEdit!: boolean;
  fontSize: string = '24';
  titleList: string[] = ['NEW CATEGORY', 'UPDATE CATEGORY'];
  title: string = '';
  buttonContentList: string[] = ['CONFIRM', 'UPDATE CATEGORY'];
  buttonContent: string = '';
  constructor() {}
  ngOnInit() {}
  // object
  ProductCategory: any = {
    CategoryCode: '',
    Name: '',
    Address: '',
  };
  clearObject() {
    for (let key in this.ProductCategory) {
      if (this.ProductCategory.hasOwnProperty(key)) {
        this.ProductCategory[key] = '';
      }
    }
  }
  bindObject(value?: any) {
    for (let key in value) {
      if (this.ProductCategory.hasOwnProperty(key)) {
        if (key != 'CategoryID') {
          this.ProductCategory[key] = value[key];
        }
      }
    }
  }
  toggleShowOverlay(value?: any) {
    if (!value) {
      this.isEdit = false;
      this.title = this.titleList[0];
      this.buttonContent = this.buttonContentList[0];
      this.clearObject();
      this.isOpenForm = !this.isOpenForm;
    } else {
      this.isEdit = true;
      this.title = this.titleList[1];
      this.buttonContent = this.buttonContentList[1];
      this.bindObject(value);
      this.isOpenForm = !this.isOpenForm;
    }
  }
  onOpenEdit(value?: any) {
    this.toggleShowOverlay(value);
  }
  propagation(event: Event) {
    event.stopPropagation();
  }

  addORupdate() {
    if (this.isEdit) {
      console.log('update');
    } else {
      console.log('add');
    }
  }
}
