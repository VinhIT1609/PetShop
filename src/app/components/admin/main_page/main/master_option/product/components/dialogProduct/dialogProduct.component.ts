import { NotificationService } from './../../../../../../../../services/notification.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiServicesService } from '../../../../../../../../services/api-services.service';
import { Observable } from 'rxjs';
import { table } from 'console';

@Component({
  selector: 'app-dialogProduct',
  templateUrl: './dialogProduct.component.html',
  styleUrls: ['./dialogProduct.component.css'],
})
export class DialogProductComponent implements OnInit {
  isOpenForm: boolean = false;
  isEdit: boolean = true;
  titleArray: string[] = ['ADD NEW PRODUCT', 'PRODUCT INFORMATION'];
  formTitle: string = this.titleArray[0];
  productListTemp: any[] = [];
  btnContentArr: string[] = ['CONFIRM PRODUCT', 'UPDATE PRODUCT'];
  btnContent: string = 'CONFIRM';
  @Output() callReloadTable_Product_Dialog: EventEmitter<any> =
    new EventEmitter<any>();
  // Object
  productObject: any = {
    ProductCode: '',
    ProductName: '',
    // Image: '',
    Price: '',
    Quantity: '',
    StatusID: '',
    CategoryID: '',
    Description: '',
  };
  productList$!: Observable<any>;
  productID_for_update!: any;
  productObject_update: any = {};
  constructor(
    private apiservice: ApiServicesService,
    private noti: NotificationService
  ) {}
  //  value of form
  fontSize: any = 20 + 'px';
  //CRUD
  initData(): Observable<any> | null {
    return this.apiservice.Call_API('Product', 'get');
  }

  ngOnInit() {}
  onOpenEdit(value?: any) {
    this.toggleShowOverlay(value);
  }
  toggleShowOverlay(value?: any) {
    if (!value) {
      this.isEdit = false;
      this.formTitle = this.titleArray[0];
      this.btnContent = this.btnContentArr[0];
      this.isOpenForm = !this.isOpenForm;
      this.clearProductData();
    } else {
      this.isEdit = true;
      this.formTitle = this.titleArray[1];
      this.btnContent = this.btnContentArr[1];
      this.bindProductData(value);
      this.isOpenForm = !this.isOpenForm;
    }
  }
  clearProductData() {
    // this.productObject.Image = '';
    for (let key in this.productObject) {
      if (this.productObject.hasOwnProperty(key)) {
        this.productObject[key] = '';
      }
    }
  }
  bindProductData(value: any) {
    this.productObject.ProductID = value['ProductID'];
    for (let key in value) {
      if (this.productObject.hasOwnProperty(key)) {
        this.productObject[key] = value[key];
      }
    }
  }
  propagation(event: Event) {
    event.stopPropagation();
  }
  // thêm sản phẩm mới
  addProduct() {
    console.log(this.productObject);
    this.apiservice
      .Call_API('Product/AddProduct', 'post', null, this.productObject)
      ?.subscribe((x) => {
        if (x[0]['result'] == 1) {
          this.sendSucess('THÊM SẢN PHẨM', 'Sản phẩm đã được thêm !', 3000);
          this.reloadData();
          this.isOpenForm = !this.isOpenForm;
        } else {
          this.sendError('THÊM SẢN PHẨM', 'Thất bại !', 3000);
        }
      });
  }
  // cập nhật sản phẩm
  updateProduct() {
    const currentDate = new Date();
    const timezoneOffset = -7 * 60; // Vietnam is usually UTC+7
    const adjustedDate = new Date(
      currentDate.getTime() - timezoneOffset * 60000
    );
    const now = adjustedDate.toISOString().replace('Z', '');
    this.productObject.ModifiedDate = now;
    this.apiservice
      .Call_API('Product/UpdateProduct', 'post', null, this.productObject)
      ?.subscribe((x) => {
        if (x[0]['result'] == 1) {
          this.sendSucess(
            'CẬP NHẬT SẢN PHẨM',
            'Sản phẩm đã được cập nhật !',
            3000
          );
          this.isOpenForm = !this.isOpenForm;
        } else {
          this.sendError('CẬP NHẬT SẢN PHẨM', 'Thất bại !', 3000);
        }
      });
    this.reloadData();
  }

  removeProduct(listProduct: any[]) {
    console.log(listProduct);
    const tempList: any[] = [];
    listProduct.forEach((product) => {
      tempList.push(product.ProductID);
    });
    this.apiservice
      .Call_API('Product/DeleteProduct', 'post', null, tempList.toString())
      ?.subscribe((x) => {
        if (x[0]['result'] == 1) {
          this.sendSucess(
            'XÓA SẢN PHẨM',
            'Đã xóa ' + tempList.length + ' sản phẩm!',
            3000
          );
          this.reloadData();
        }
      });
  }
  reloadData() {
    this.callReloadTable_Product_Dialog.emit('reload table');
  }
  addORupdate() {
    if (this.isEdit) {
      this.updateProduct();
    } else {
      this.addProduct();
    }
  }
  // call Notification Service
  sendSucess(title: string, msg: string, time: number) {
    this.noti.success(title, msg, 3000);
  }
  sendError(title: string, msg: string, time: number) {
    this.noti.error(title, msg, 3000);
  }
  sendWarning(title: string, msg: string, time: number) {
    this.noti.warning(title, msg, 3000);
  }
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
    {
      id: 3,
      status: 'Disabled',
      value: false,
    },
  ];
  dataCategory: any[] = [
    { id: 1, name: 'Food Company', value: 'food_company' },
    { id: 2, name: 'Toy Company', value: 'toy_company' },
    { id: 3, name: 'Healthy Company', value: 'healthy_company' },
  ];
}
