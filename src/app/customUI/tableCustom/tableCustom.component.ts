import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tableCustom',
  templateUrl: './tableCustom.component.html',
  styleUrls: ['./tableCustom.component.css'],
})
export class TableCustomComponent implements OnInit {
  @Input() tableHeaders: any[] = [];
  @Input() tableContents: any = [];
  @Input() actionValues: any[] = [];
  @Input() itemPerPageTable: any;
  @Input() currentPageTable: any = 1;
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
}
