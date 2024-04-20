import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from '../../../../../../../../Services/api-services.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dialogProduct',
  templateUrl: './dialogProduct.component.html',
  styleUrls: ['./dialogProduct.component.css'],
})
export class DialogProductComponent implements OnInit {
  isOpenForm: boolean = false;
  isEdit: boolean = true;
  // Object
  productObject: any = {};
  constructor(private apiservice: ApiServicesService) {}

  ngOnInit() {}
  addNewPD() {
    this.isOpenForm = !this.isOpenForm;
  }
  onOpenEdit(value: string) {
    this.toggleShowOverlay(value);
  }
  toggleShowOverlay(value?: any) {
    if (value) {
      this.isEdit = true;
      this.bindProductData(value);
      console.log(value);
      this.isOpenForm = !this.isOpenForm;
    } else {
      this.isOpenForm = !this.isOpenForm;
      this.isEdit = false;
    }
  }
  bindProductData(value: any) {
    debugger;
    this.productObject.ProductName = value['ProductName'];
    this.productObject.Price = value['Price'];
    this.productObject.Quantity = value['Quantity'];
    this.productObject.StatusID = value['Status'];
    this.productObject.CategoryID = value['CategoryID'];
    this.productObject.Description = value['Description'];
  }
  propagation(event: Event) {
    event.stopPropagation();
  }
  //CRUD
  initData(): Observable<any> | null {
    return this.apiservice.Call_API('Product', 'get');
  }
  addProduct() {
    // console.log(this.productObject);
    // this.apiservice
    //   .Call_API('Product/AddProduct', 'post', null, this.productObject)
    //   ?.subscribe((x) => {
    //     if (x[0]['result'] == 1) {
    //       alert('Add thanh cong!');
    //       // this.initData()?.subscribe((x) => (this.productList = x));
    //     }
    //   });
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
    //         this.initData()?.subscribe((x) => (this.productList = x));
    //       }
    //     });
    // } else {
    //   console.log('No key-value pairs found in this.productEmitted');
    // }
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
