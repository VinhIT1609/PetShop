import { CommonModule, JsonPipe } from '@angular/common';
import { Component, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiServicesService } from '../../../../../../../Services/api-services.service';

@Component({
  selector: 'app-masterProduct',
  templateUrl: './masterProduct.component.html',
  styleUrls: ['./masterProduct.component.css'],
})
export class MasterProductComponent implements OnInit {
  // CSS value

  isOpenForm: boolean = false;
  //value
  totalProducts: number = 100;
  active: number = 100;
  deactive: number = 100;
  outofstock: number = 100;
  productData_sql: any[] = [];
  productList: any[] = [];
  //table value
  headerProduct: any[] = [
    { Head: 'Product Name', FieldName: 'ProductName' },
    { Head: 'Image', FieldName: 'Image' },
    { Head: 'Price', FieldName: 'Price' },
    { Head: 'Quantity', FieldName: 'Quantity' },
    { Head: 'Status', FieldName: 'Status' },
    { Head: 'Category', FieldName: 'Category' },
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
    this.apiservice.Call_API('Product', 'get')?.subscribe((data) => {
      this.productData_sql = data;
      this.productData_sql.forEach((data) => {
        let product: any = {};
        product['ProductName'] = data.ProductName;
        product['Image'] = data.Image;
        product['Price'] = data.Price;
        product['Quantity'] = data.Quantity;
        product['Category'] = data.Category;
        if (data.Status == 1) {
          product['Status'] = 'Active';
        } else {
          product['Status'] = 'Deactive';
        }
        this.productList.push(product);
      });
      console.log(this.productData_sql);
    });
  }

  addNewPD() {
    this.isOpenForm = !this.isOpenForm;
  }
  toggleShowOverlay() {
    this.isOpenForm = !this.isOpenForm;
  }
  propagation(event: Event) {
    event.stopPropagation();
  }
  // form add san pham
  isFormSubmited: boolean = false;
  productObject: any = {
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
