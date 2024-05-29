import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tableCustom',
  templateUrl: './tableCustom.component.html',
  styleUrls: ['./tableCustom.component.css'],
})
export class TableCustomComponent implements OnInit {
  isEmitted: Boolean = false;
  arr_pID: any = [];
  @Input() tableHeaders: any[] = [];
  @Input() tableContents: any = [];
  @Input() actionValues: any[] = [];
  @Input() itemPerPageTable: any;
  @Input() currentPageTable: any = 1;
  @Output() outputTableItem: EventEmitter<any> = new EventEmitter<any>();
  itemPerPageArrayTable: any[] = [5, 10, 25, 100]; // số lượng item mỗi trang
  constructor() {}

  ngOnInit() {
    this.itemPerPageTable = this.itemPerPageArrayTable[0];
  }

  //chia data
  get paginatedData() {
    const start = (this.currentPageTable - 1) * this.itemPerPageTable;
    const end = start + this.itemPerPageTable;
    return this.tableContents.slice(start, end);
  }
  changePage(page: number) {
    this.currentPageTable = page;
  }
  bindCurr(changeToFirstCurr: any) {
    this.currentPageTable = changeToFirstCurr;
    this.bindPerPage; // thay currenPage để reset lại data trong bảng
    this.paginatedData; // trả data vào lại table
  }

  bindPerPage(newitemPerPage: string) {
    this.itemPerPageTable = parseInt(newitemPerPage);
  }

  //function
  emitTableItem(tableItem: any) {
    this.outputTableItem.emit(tableItem);
  }
  onCheckboxClick(event: Event, pdID: any) {
    event.stopPropagation();
    console.log(pdID);
    this.arr_pID.forEach((element: any, index: any) => {
      console.log(element);
      if (element === pdID) {
        // this.arr_pID.splice(index, 1);
        console.log(true);
      } else {
        console.log(false);
        this.arr_pID.push(pdID);
      }
    });
    console.log(this.arr_pID);
  }
}
