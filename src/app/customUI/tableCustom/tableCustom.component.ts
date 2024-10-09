import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { ApiServicesService } from '../../services/api-services.service';
import { from, Observable } from 'rxjs';
@Component({
  selector: 'app-tableCustom',
  templateUrl: './tableCustom.component.html',
  styleUrls: ['./tableCustom.component.css'],
})
export class TableCustomComponent implements OnInit {
  constructor(private apiService: ApiServicesService) {}
  // các Input dữ liệu
  @Input() tableName: string = '';
  @Input() columnsView: any[] = [];
  @Input() API_NAME: string = '';
  // các value khai báo
  dataTable: any[] = [];
  // dữ liệu của table custom
  tableColumns: any[] = [];
  // value cho pagination
  totalItemsTable: number = 0;
  @Input() currentPage: number = 1;
  @Input() itemPerPage: number = 10;
  // value cho hiển thị các button
  @Input() displayButtons: string = '';
  buttons: any[] = [];
  //value cho tìm kiếm trên table
  inputValue: string = '';
  dataTableCopy: any[] = [];
  matchItems: any[] = [];
  // value gọi form
  @Output() callForm: EventEmitter<any> = new EventEmitter();
  // value đẩy item trong bảng ra parent
  @Output() outputRow: EventEmitter<any> = new EventEmitter();
  //  value xóa các item theo danh sách
  removeItemList: any[] = [];
  isDisabledRemove: boolean = true;
  // reload table
  @Input() isReload_Table?: any;
  @Output() isReload_TableChange: EventEmitter<any> = new EventEmitter();
  ngOnInit() {
    this.displayButtonsOnTable(this.displayButtons);
    this.initData(this.API_NAME)?.subscribe((dataAPI) => {
      this.dataTable = dataAPI;
      this.dataTableCopy = dataAPI;
      console.log(dataAPI);
    });
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['isReload_Table'].currentValue == 'reload table') {
      // reload lại data trên table
      setTimeout(() => {
        this.initData(this.API_NAME)?.subscribe((dataAPI) => {
          this.dataTable = dataAPI;
          this.dataTableCopy = dataAPI;
          if (
            this.currentPage >
            Math.ceil(this.dataTable.length / this.itemPerPage)
          ) {
            this.currentPage = this.currentPage - 1;
          }
          this.isReload_TableChange.emit('reload success');
        });
      }, 100);
    }
  }

  // function
  // reload table
  reload(value: any) {
    if (value) {
      this.paginatedData;
    }
  }
  // tìm kiếm trên table
  formatMoney(money: number) {
    return money.toLocaleString('it-IT', {
      style: 'currency',
      currency: 'vnd',
    });
  }
  keyDown_Enter(event: any) {
    this.searchOnTable();
  }
  searchOnTable() {
    this.matchItems = [];
    this.dataTable = this.dataTableCopy;
    this.dataTable.find((item) => {
      if (
        Object.values(item).some(
          (value: any) =>
            value !== null &&
            value !== undefined &&
            value
              .toString()
              .toLowerCase()
              .includes(this.inputValue.toLowerCase())
        )
      ) {
        this.matchItems.push(item);
      }
    });
    this.dataTable = this.matchItems;
    this.currentPage = 1;
  }
  // hàm kiểm tra đầu vào và hiển thị buttons
  displayButtonsOnTable(buttons: string) {
    if (buttons.includes('ADD')) {
      this.buttons.push({ name: 'ADD', icon: 'add', color: '#98fa5b' });
    }
    if (buttons.includes('DELETE')) {
      this.buttons.push({ name: 'DELETE', icon: 'DELETE', color: '#ff0000' });
    }
    if (buttons.includes('UPDATE')) {
      this.buttons.push({ name: 'DELETE', icon: 'DELETE', color: 'red' });
    }
  }
  // khởi tạo dữ liệu
  initData(link: string): Observable<any> | null {
    return this.apiService.Call_API(link, 'get');
  }
  // phân trang
  get paginatedData() {
    const start = (this.currentPage - 1) * this.itemPerPage;
    const end = start + this.itemPerPage;
    return this.dataTable.slice(start, end);
  }
  changePage(page: number) {
    this.currentPage = page;
  }
  emptyRow(dataLength: number, totalRows: number): any[] {
    const emptyRows = totalRows - dataLength;
    return emptyRows > 0 ? Array(emptyRows) : [];
  }
  onChangeItemPerPage_TableCustom(newItemPerPage: number) {
    this.itemPerPage = newItemPerPage;
    this.paginatedData;
  }
  onChangeCurrentPage_TableCustom(newCurrentPage: number) {
    this.currentPage = newCurrentPage;
    this.paginatedData;
  }
  // button handleClick
  handleClick(button: any, fromTable: any, item?: any) {
    switch (button) {
      case 'ADD':
        this.callForm.emit({ button, fromTable });
        break;
      case 'UPDATE':
        this.callForm.emit({ button, fromTable, item });
        break;
      case 'DELETE':
        switch (fromTable) {
          case 'Product Data':
            this.callForm.emit({ button, removeItemList: this.removeItemList });
            break;
        }
    }
  }
  // xử lý thẻ td chứ checkbox và checkbox.
  toggleChk(event: Event, obj: any) {
    const checkbox = (event.currentTarget as HTMLElement).querySelector(
      'input[type="checkbox"]'
    ) as HTMLInputElement;
    checkbox.checked = !checkbox.checked;
    this.addToRemove(obj);
    event.stopPropagation();
  }
  handleChk(obj: any) {
    this.addToRemove(obj);
  }

  // hàm add xử lý add vào danh sách remove
  addToRemove(obj: any) {
    const deleteButton = document.querySelector('.deleteButton');

    if (!this.removeItemList.includes(obj)) {
      this.removeItemList.push(obj);
    } else {
      this.removeItemList.splice(this.removeItemList.indexOf(obj), 1);
    }
    // kiểm tra độ dài để bật tắt nút DELETE
    if (this.removeItemList.length !== 0) {
      deleteButton?.classList.remove('disabledDelete');
    } else {
      deleteButton?.classList.add('disabledDelete');
    }
  }
}
