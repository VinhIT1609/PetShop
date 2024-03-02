import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tableCustom',
  templateUrl: './tableCustom.component.html',
  styleUrls: ['./tableCustom.component.css']
})
export class TableCustomComponent implements OnInit {
  @Input() maxWidth!: number;
  @Input() maxHeight!: number;
  @Input() tableHeaders: any[] = [];
  @Input() tableContents: any = [];
  @Input() actionValues: any[] = []
  @Input() itemPerPageTable: any;
  @Input() currentPageTable: any;
  constructor() { }

  ngOnInit() {
  }
  //chia data moi trang
  get paginatedData() {
    const start = (this.currentPageTable - 1) * this.itemPerPageTable;
    const end = start + this.itemPerPageTable;
    return this.tableContents.slice(start, end);
  }
  changePage(page: number) {
    this.currentPageTable = page;
  }
}
