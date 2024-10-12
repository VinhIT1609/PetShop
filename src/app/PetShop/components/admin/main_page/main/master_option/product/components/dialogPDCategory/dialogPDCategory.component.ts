import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiServicesService } from '../../../../../../../../../SYS/services/api-services.service';
import { NotificationService } from '../../../../../../../../../SYS/services/notification.service';

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
  // output
  @Output() callReloadTable_ProductCategory_Dialog: EventEmitter<any> =
    new EventEmitter();
  constructor(
    private apiService: ApiServicesService,
    private notification: NotificationService
  ) {}
  ngOnInit() {}
  // object
  ProductCategory: any = {
    CategoryCode: '',
    Name: '',
    StatusID: '',
  };
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
    {
      id: 3,
      status: 'Disabled',
      value: false,
    },
  ];
  clearObject() {
    for (let key in this.ProductCategory) {
      if (this.ProductCategory.hasOwnProperty(key)) {
        this.ProductCategory[key] = '';
      }
    }
  }
  bindObject(value?: any) {
    this.ProductCategory['CategoryID'] = value['CategoryID'];
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
  addProductCategory() {
    this.apiService
      .Call_API(
        'ProductCategory/AddProductCategory',
        'post',
        null,
        this.ProductCategory
      )
      ?.subscribe((x) => {
        if (x[0]['result'] == 1) {
          this.notification.success('ADD', 'Thêm thành công !', 3000);
          this.reloadData();
          this.isOpenForm = !this.isOpenForm;
        } else {
          this.notification.error('ERROR', 'Thêm thất bạn', 3000);
        }
      });
  }
  updateProductCategory() {
    this.apiService
      .Call_API(
        'ProductCategory/UpdateProductCategory',
        'post',
        null,
        this.ProductCategory
      )
      ?.subscribe((x) => {
        if (x[0]['result'] == 1) {
          this.notification.success('UPDATE', 'Cập nhật thành công !', 3000);
          this.reloadData();
          // this.isOpenForm = !this.isOpenForm;
        } else {
          this.notification.error('UPDATE', 'Cập nhật thất bại !', 3000);
        }
      });
  }

  removeProductCategory(listProductCategory: any[]) {
    // console.log(listProductCategory);
    let tempList: any[] = [];
    listProductCategory.forEach((productCategory) => {
      tempList.push(productCategory.CategoryID);
    });
    this.apiService
      .Call_API(
        'ProductCategory/DeleteProductCategory',
        'post',
        null,
        tempList.toString()
      )
      ?.subscribe((x) => {
        if (x[0]['result'] == 1) {
          this.notification.success('UPDATE', 'Xoa thành công !', 3000);
          this.reloadData();
        }
      });
  }
  reloadData() {
    this.callReloadTable_ProductCategory_Dialog.emit('reload table');
  }
  addORupdate() {
    if (this.isEdit) {
      this.updateProductCategory();
    } else {
      this.addProductCategory();
    }
  }
}
