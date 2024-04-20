import {
  Component,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { ApiServicesService } from '../../../../../../../Services/api-services.service';
import { Observable } from 'rxjs';
import { DialogProductComponent } from '../components/dialogProduct/dialogProduct.component';

@Component({
  selector: 'app-masterProduct',
  templateUrl: './masterProduct.component.html',
  styleUrls: ['./masterProduct.component.css'],
})
export class MasterProductComponent implements OnInit {
  // CSS value
  isOpenForm: boolean = false;
  isCloseForm: boolean = true;
  //value
  totalProducts: number = 100;
  active: number = 100;
  deactive: number = 100;
  outofstock: number = 100;
  productData_sql: any[] = [];
  productList: any[] = [];
  isEdit: boolean = false;
  @ViewChild('dialog') dialog!: DialogProductComponent;
  @Input() productEmitted: any = {};
  //table value
  headerProduct: any[] = [
    { Head: 'Product Name', FieldName: 'ProductName' },
    { Head: 'Image', FieldName: 'Image' },
    { Head: 'Price', FieldName: 'Price' },
    { Head: 'Quantity', FieldName: 'Quantity' },
    { Head: 'Status', FieldName: 'Status' },
    { Head: 'Category', FieldName: 'CategoryName' },
  ];
  // temp data
  productList_fake: any = [
    {
      id: 1,
      ProductName: 'pate cho1',
      Image:
        'https://fagopet.vn/uploads/images/6289daf49487f626bf2d8617/thuc-an-cho-cho-lon-pedigree-vi-bo-tui-3kg.webp',
      Price: 20000,
      Quantity: 200,
      Status: 'Active',
      Category: 'meo',
    },
    {
      id: 2,
      ProductName: 'pate cho2',
      Image:
        'https://vinpet.com.vn/wp-content/uploads/2020/12/Thuc-an-cho-cho-ganador-adult-600x600.jpg',
      Price: 20000,
      Quantity: 200,
      Status: true,
      Category: 'meo',
    },
    {
      id: 1,
      ProductName: 'pate cho3',
      Image:
        'https://vinpet.com.vn/wp-content/uploads/2020/12/Thuc-an-cho-cho-ganador-adult-600x600.jpg',
      Price: 20000,
      Quantity: 200,
      Status: true,
      Category: 'meo',
    },
    {
      id: 1,
      ProductName: 'pate cho4',
      Image:
        'https://vinpet.com.vn/wp-content/uploads/2020/12/Thuc-an-cho-cho-ganador-adult-600x600.jpg',
      Price: 20000,
      Quantity: 200,
      Status: true,
      Category: 'meo',
    },
    {
      id: 1,
      ProductName: 'pate cho5',
      Image:
        'https://vinpet.com.vn/wp-content/uploads/2020/12/Thuc-an-cho-cho-ganador-adult-600x600.jpg',
      Price: 20000,
      Quantity: 200,
      Status: true,
      Category: 'meo',
    },
    {
      id: 1,
      ProductName: 'pate cho6',
      Image:
        'https://vinpet.com.vn/wp-content/uploads/2020/12/Thuc-an-cho-cho-ganador-adult-600x600.jpg',
      Price: 20000,
      Quantity: 200,
      Status: true,
      Category: 'meo',
    },
    {
      id: 1,
      ProductName: 'patasdasdasde cho7',
      Image:
        'https://vinpet.com.vn/wp-content/uploads/2020/12/Thuc-an-cho-cho-ganador-adult-600x600.jpg',
      Price: 20000,
      Quantity: 200,
      Status: true,
      Category: 'meo',
    },
    {
      id: 1,
      ProductName: 'paasdasdasdasdte cho8',
      Image:
        'https://vinpet.com.vn/wp-content/uploads/2020/12/Thuc-an-cho-cho-ganador-adult-600x600.jpg',
      Price: 20000,
      Quantity: 200,
      Status: true,
      Category: 'meo',
    },
    {
      id: 1,
      ProductName: 'patasdasdasdasde cho9',
      Image:
        'https://vinpet.com.vn/wp-content/uploads/2020/12/Thuc-an-cho-cho-ganador-adult-600x600.jpg',
      Price: 20000,
      Quantity: 200,
      Status: true,
      Category: 'meo',
    },
    {
      id: 1,
      ProductName: 'asdasdasdasdasd cho10',
      Image:
        'https://vinpet.com.vn/wp-content/uploads/2020/12/Thuc-an-cho-cho-ganador-adult-600x600.jpg',
      Price: 20000,
      Quantity: 200,
      Status: true,
      Category: 'meo',
    },
    {
      id: 1,
      ProductName: 'pate cho10',
      Image:
        'https://vinpet.com.vn/wp-content/uploads/2020/12/Thuc-an-cho-cho-ganador-adult-600x600.jpg',
      Price: 20000,
      Quantity: 200,
      Status: true,
      Category: 'meo',
    },
    {
      id: 1,
      ProductName: 'pate ádasdasdasdascho10',
      Image:
        'https://vinpet.com.vn/wp-content/uploads/2020/12/Thuc-an-cho-cho-ganador-adult-600x600.jpg',
      Price: 20000,
      Quantity: 200,
      Status: true,
      Category: 'meo',
    },
    {
      id: 1,
      ProductName: 'pate cho10',
      Image:
        'https://vinpet.com.vn/wp-content/uploads/2020/12/Thuc-an-cho-cho-ganador-adult-600x600.jpg',
      Price: 20000,
      Quantity: 200,
      Status: true,
      Category: 'meo',
    },
    {
      id: 1,
      ProductName: 'pate cho10',
      Image:
        'https://vinpet.com.vn/wp-content/uploads/2020/12/Thuc-an-cho-cho-ganador-adult-600x600.jpg',
      Price: 20000,
      Quantity: 200,
      Status: true,
      Category: 'meo',
    },
    {
      id: 1,
      ProductName: 'pate cho10',
      Image:
        'https://vinpet.com.vn/wp-content/uploads/2020/12/Thuc-an-cho-cho-ganador-adult-600x600.jpg',
      Price: 20000,
      Quantity: 200,
      Status: true,
      Category: 'meo',
    },
    {
      id: 1,
      ProductName: 'pate cho10',
      Image:
        'https://vinpet.com.vn/wp-content/uploads/2020/12/Thuc-an-cho-cho-ganador-adult-600x600.jpg',
      Price: 20000,
      Quantity: 200,
      Status: true,
      Category: 'meo',
    },
    {
      id: 1,
      ProductName: 'pate cho10',
      Image:
        'https://vinpet.com.vn/wp-content/uploads/2020/12/Thuc-an-cho-cho-ganador-adult-600x600.jpg',
      Price: 20000,
      Quantity: 200,
      Status: true,
      Category: 'meo',
    },
    {
      id: 1,
      ProductName: 'pate cho10',
      Image:
        'https://vinpet.com.vn/wp-content/uploads/2020/12/Thuc-an-cho-cho-ganador-adult-600x600.jpg',
      Price: 20000,
      Quantity: 200,
      Status: true,
      Category: 'meo',
    },
    {
      id: 1,
      ProductName: 'pate cho10',
      Image:
        'https://vinpet.com.vn/wp-content/uploads/2020/12/Thuc-an-cho-cho-ganador-adult-600x600.jpg',
      Price: 20000,
      Quantity: 200,
      Status: true,
      Category: 'meo',
    },
    {
      id: 1,
      ProductName: 'pate cho10',
      Image:
        'https://vinpet.com.vn/wp-content/uploads/2020/12/Thuc-an-cho-cho-ganador-adult-600x600.jpg',
      Price: 20000,
      Quantity: 200,
      Status: true,
      Category: 'meo',
    },
    {
      id: 1,
      ProductName: 'pate cho10',
      Image:
        'https://vinpet.com.vn/wp-content/uploads/2020/12/Thuc-an-cho-cho-ganador-adult-600x600.jpg',
      Price: 20000,
      Quantity: 200,
      Status: true,
      Category: 'meo',
    },
    {
      id: 1,
      ProductName: 'pate cho10',
      Image:
        'https://vinpet.com.vn/wp-content/uploads/2020/12/Thuc-an-cho-cho-ganador-adult-600x600.jpg',
      Price: 20000,
      Quantity: 200,
      Status: true,
      Category: 'meo',
    },
    {
      id: 1,
      ProductName: 'pate cho10',
      Image:
        'https://vinpet.com.vn/wp-content/uploads/2020/12/Thuc-an-cho-cho-ganador-adult-600x600.jpg',
      Price: 20000,
      Quantity: 200,
      Status: true,
      Category: 'meo',
    },
    {
      id: 1,
      ProductName: 'pate cho10',
      Image:
        'https://vinpet.com.vn/wp-content/uploads/2020/12/Thuc-an-cho-cho-ganador-adult-600x600.jpg',
      Price: 20000,
      Quantity: 200,
      Status: true,
      Category: 'meo',
    },
    {
      id: 1,
      ProductName: 'pate cho10',
      Image:
        'https://vinpet.com.vn/wp-content/uploads/2020/12/Thuc-an-cho-cho-ganador-adult-600x600.jpg',
      Price: 20000,
      Quantity: 200,
      Status: true,
      Category: 'meo',
    },
  ];
  //function
  constructor(private apiservice: ApiServicesService) {}

  ngOnInit() {
    this.initData()?.subscribe((data) => {
      this.productList.push(...data);
    });
    this.productEmitted = null;
  }
  initData(): Observable<any> | null {
    return this.apiservice.Call_API('Product', 'get');
  }
  // form add san pham
  addNewPD() {
    this.dialog.addNewPD();
  }
  onOpenEdit(value: string) {
    this.dialog.onOpenEdit(value);
  }

  productIDObject: any = {};
  removeProduct() {
    debugger;
    const productEntries = Object.entries(this.productEmitted);
    if (productEntries.length > 0) {
      const [firstKey, firstValue] = productEntries[0];
      this.productIDObject[firstKey] = firstValue;
      console.log(this.productIDObject);
      // this.apiservice
      //   .Call_API('Product/DeleteProduct', 'post', null, this.productIDObject)
      //   ?.subscribe((x) => {
      //     if (x[0]['result'] == 1) {
      //       alert('Xoa thanh cong!');
      //       this.initData()?.subscribe((x) => (this.productList = x));
      //     }
      //   });
    } else {
      console.log('No key-value pairs found in this.productEmitted');
    }
  }
}
