import { join } from 'node:path';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { ApiServicesService } from '../../../../../../../services/api-services.service';
import { DialogProductComponent } from '../components/dialogProduct/dialogProduct.component';
import { DialogPDCategoryComponent } from '../components/dialogPDCategory/dialogPDCategory.component';

@Component({
  selector: 'app-masterProduct',
  templateUrl: './masterProduct.component.html',
  styleUrls: ['./masterProduct.component.css'],
})
export class MasterProductComponent implements OnInit {
  // isActiveButtonRemove: boolean = true;
  //value
  @ViewChild('dialog') dialog!: DialogProductComponent;
  @ViewChild('dialogPDCate') dialogCate!: DialogPDCategoryComponent;
  checkedProducts: any[] = [];
  listIdString?: string;
  tagList: string[] = ['Product List', 'Product Category'];
  // value display tag
  isDisplay: boolean = true;
  //table value khai báo để dùng table custom
  tableProduct: string = 'Product Data';
  productColumns: any[] = [
    { Head: 'Image', FieldName: 'Image' },
    { Head: 'Product Name', FieldName: 'ProductName' },
    { Head: 'Category', FieldName: 'Name' },
    { Head: 'Quantity', FieldName: 'Quantity' },
    { Head: 'Price', FieldName: 'Price' },
    { Head: 'Status', FieldName: 'StatusID' },
  ];
  tableProductCategory: string = 'Product Category';
  productCategoryColumns: any[] = [
    { Head: 'CategoryID', FieldName: 'CategoryID' },
    { Head: 'Category Name', FieldName: 'Name' },
    { Head: 'Address', FieldName: 'Address' },
  ];

  // reload
  isReload_Master!: any;
  //function
  constructor(private apiservice: ApiServicesService) {}

  ngOnInit() {}
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['this.isReload_Master']) {
      console.log(changes['this.isReload_Master']);
    }
  }

  callForm_Product(value: any) {
    console.log(value);
    switch (value.button) {
      case 'ADD':
        switch (value.fromTable) {
          case 'Product Data':
            this.dialog.onOpenEdit();
            break;
          case 'Product Category':
            this.dialogCate.onOpenEdit();
            break;
        }
        break;
      case 'UPDATE':
        console.log('update', value.fromTable);
        switch (value.fromTable) {
          case 'Product Data':
            this.dialog.onOpenEdit(value.item);
            break;
          case 'Product Category':
            this.dialogCate.onOpenEdit(value.item);
            break;
        }
        break;
      case 'DELETE':
        this.dialog.removeProduct(value.removeItemList);
        break;
    }
  }

  // reload table
  callReloadTable_Master_Product(value?: any) {
    if (value == 'reload table') {
      this.isReload_Master = value;
    }
  }
  handleTag(tag: any) {
    switch (tag) {
      case this.tagList[0]:
        this.isDisplay = true;
        break;
      case this.tagList[1]:
        this.isDisplay = false;
        break;
    }
  }
}
