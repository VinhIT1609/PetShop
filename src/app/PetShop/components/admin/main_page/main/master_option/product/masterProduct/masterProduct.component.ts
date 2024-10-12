import { join } from 'node:path';
import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { ApiServicesService } from '../../../../../../../../SYS/services/api-services.service';
import { DialogProductComponent } from '../components/dialogProduct/dialogProduct.component';
import { DialogPDCategoryComponent } from '../components/dialogPDCategory/dialogPDCategory.component';

@Component({
  selector: 'app-masterProduct',
  templateUrl: './masterProduct.component.html',
  styleUrls: ['./masterProduct.component.css'],
})
export class MasterProductComponent implements OnInit, AfterViewInit {
  // isActiveButtonRemove: boolean = true;
  //value
  @ViewChild('dialog') dialog!: DialogProductComponent;
  @ViewChild('dialogPDCate') dialogCate!: DialogPDCategoryComponent;
  checkedProducts: any[] = [];
  listIdString?: string;
  tagList: string[] = ['Product List', 'Product Category'];
  // value display tag
  isDisplay: string = 'Product';
  //table value khai báo để dùng table custom
  tableProduct: string = 'Product Data';
  @ViewChild('statusColumn') statusColumn!: TemplateRef<any>;
  productColumns: any[] = [];
  tableProductCategory: string = 'Product Category';
  productCategoryColumns: any[] = [
    { Head: 'CategoryID', FieldName: 'CategoryID' },
    { Head: 'Code', FieldName: 'CategoryCode' },
    { Head: 'Category Name', FieldName: 'Name' },
    { Head: 'Status', FieldName: 'StatusID' },
  ];

  // reload
  isReload_Master!: any;
  //function
  constructor(private apiservice: ApiServicesService) {}
  ngAfterViewInit(): void {
    this.productColumns = [
      { Head: 'Image', FieldName: 'Image' },
      { Head: 'Product Code', FieldName: 'ProductCode' },
      { Head: 'Product Name', FieldName: 'ProductName' },
      { Head: 'Category', FieldName: 'Name' },
      { Head: 'Quantity', FieldName: 'Quantity' },
      { Head: 'Price', FieldName: 'Price' },
      { Head: 'Status', FieldName: 'StatusID', template: this.statusColumn },
    ];
  }

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
        console.log('delete', value.fromTable);
        switch (value.fromTable) {
          case 'Product Data':
            this.dialog.removeProduct(value.removeItemList);
            break;
          case 'Product Category':
            this.dialogCate.removeProductCategory(value.removeItemList);
            break;
        }
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
        this.isDisplay = 'Product';
        break;
      case this.tagList[1]:
        this.isDisplay = 'ProductCategory';
        break;
    }
  }
}
