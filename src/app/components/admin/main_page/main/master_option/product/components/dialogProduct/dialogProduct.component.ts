import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiServicesService } from '../../../../../../../../Services/api-services.service';
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
  titleArray: string[] = ['NEW PRODUCT', 'PRODUCT INFORMATION'];
  formTitle: string = this.titleArray[0];
  productListTemp: any[] = [];
  btnContentArr: string[] = ['CONFIRM', 'UPDATE'];
  btnContent: string = 'CONFIRM';
  @Output() dataSendFromDialog: EventEmitter<any[]> = new EventEmitter<any[]>();
  // Object
  productObject: any = {};
  productList$!: Observable<any>;
  productID_for_update!: any;
  productObject_update: any = {};
  constructor(private apiservice: ApiServicesService) {}

  //CRUD
  initData(): Observable<any> | null {
    return this.apiservice.Call_API('Product', 'get');
  }

  ngOnInit() {}

  addNewPD() {
    this.isEdit = false;
    this.clearProductData();
    this.isOpenForm = !this.isOpenForm;
  }
  onOpenEdit(value: string) {
    this.toggleShowOverlay(value);
  }
  toggleShowOverlay(value?: any) {
    if (value) {
      console.log('before update: ', value);
      this.isEdit = true;
      this.formTitle = this.titleArray[1];
      this.btnContent = this.btnContentArr[1];
      this.bindProductData(value);
      this.isOpenForm = !this.isOpenForm;
    } else {
      this.isEdit = false;
      this.formTitle = this.titleArray[0];
      this.btnContent = this.btnContentArr[0];
      this.isOpenForm = !this.isOpenForm;
    }
  }
  clearProductData() {
    this.productObject.ProductName = '';
    this.productObject.Price = '';
    this.productObject.Quantity = '';
    this.productObject.StatusID = '';
    this.productObject.CategoryID = '';
    this.productObject.Description = '';
  }
  bindProductData(value: any) {
    this.productObject.ProductID = value['ProductID'];
    this.productObject.ProductName = value['ProductName'];
    this.productObject.Price = value['Price'];
    this.productObject.Quantity = value['Quantity'];
    this.productObject.StatusID = value['Status'];
    this.productObject.CategoryID = value['CategoryID'];
    this.productObject.Description = value['Description'];
    // this.productObject.Image = value['Image'];
    this.productObject.CreatedDate = value['CreatedDate'];
  }
  propagation(event: Event) {
    event.stopPropagation();
  }

  addProduct() {
    // console.log(this.productObject);
    this.apiservice
      .Call_API('Product/AddProduct', 'post', null, this.productObject)
      ?.subscribe((x) => {
        if (x[0]['result'] == 1) {
          alert('Add thanh cong!');
          this.reloadData();
        }
      });
  }
  updateProduct() {
    console.log('after update:', this.productObject);
    const currentDate = new Date();
    const timezoneOffset = -7 * 60; // Vietnam is usually UTC+7
    const adjustedDate = new Date(
      currentDate.getTime() - timezoneOffset * 60000
    );
    const now = adjustedDate.toISOString().replace('Z', '');
    console.log(now);

    this.productObject.ModifiedDate = now;
    console.log(this.productObject);
    this.apiservice
      .Call_API('Product/UpdateProduct', 'post', null, this.productObject)
      ?.subscribe((x) => {
        if (x[0]['result'] == 1) {
          alert('update success !');
          this.reloadData();
        } else {
          alert('update failed !');
        }
      });
  }
  productIDObject: any = {};
  removeProduct() {
    // const productEntries = Object.entries(this.productEmitted);
    // if (productEntries.length > 0) {
    //   const [firstKey, firstValue] = productEntries[0];
    //   this.productIDObject[firstKey] = firstValue;
    //   console.log(this.productIDObject);
    //   this.apiservice
    //     .Call_API('Product/DeleteProduct', 'post', null, this.productIDObject)
    //     ?.subscribe((x) => {
    //       if (x[0]['result'] == 1) {
    //         alert('Xoa thanh cong!');
    // this.initData()?.subscribe((x) => (this.productList = x));
    //       }
    //     });
    // } else {
    //   console.log('No key-value pairs found in this.productEmitted');
    // }
  }
  reloadData() {
    const productList$ = this.initData();
    if (productList$ !== null && productList$ !== undefined) {
      productList$.subscribe({
        next: (pList) => {
          //pList is productList
          console.log('Data from initData dialog:', pList);
          // Điều gì đó khác sẽ xảy ra ở đây dựa trên dữ liệu được trả về
          this.dataSendFromDialog.emit(pList);
        },
        error: (error) => {
          console.error('Error while fetching initData:', error);
        },
      });
    } else {
      console.log('initData() returned null or undefined.');
    }
  }
  addORupdate() {
    if (this.isEdit) {
      this.updateProduct();
    } else {
      this.addProduct();
    }
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
  ];
  dataCategory: any[] = [
    { id: 1, name: 'Food Company', value: 'food_company' },
    { id: 2, name: 'Toy Company', value: 'toy_company' },
    { id: 3, name: 'Healthy Company', value: 'healthy_company' },
  ];
}
