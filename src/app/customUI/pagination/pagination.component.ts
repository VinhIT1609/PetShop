import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css',
})
export class PaginationComponent implements OnInit, OnChanges {
  @Input() totalItems: any; // tong sl item
  @Input() currentPage: any; // trang hien tai
  @Input() itemPerPage: any; // sl item 1 trang
  @Output() onClick: EventEmitter<number> = new EventEmitter<number>();
  @Input() itemStart: any;
  @Input() itemEnd: any = 1;
  @Input() itemPerPageArray: any[] = [];
  @Output() emitCurr: EventEmitter<any> = new EventEmitter<any>();
  @Output() emitItemPerPage: EventEmitter<string> = new EventEmitter<string>();
  totalPages = 0; // tong so trang
  pages: number[] = [];
  protected isFirstRun: boolean = true;
  ngOnInit(): void {}
  ngOnChanges(changes: SimpleChanges): void {
    if (this.totalItems) {
      if (this.totalItems != 0) {
        // tong so trang = tong so luong item / so sp 1 trang
        this.totalPages = Math.ceil(this.totalItems / this.itemPerPage);
        // console.log(this.totalPages);
        this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
        if (this.isFirstRun) {
          this.itemStart = this.itemEnd;
          this.itemEnd = this.itemStart + this.itemPerPage - 1;
          this.isFirstRun = false;
        }
      }
    }
  }
  //function
  pageClicked(page: number, type: string) {
    if (type == 'next') {
      this.itemStart = this.itemEnd + 1;
      this.itemEnd = this.itemStart + this.itemPerPage - 1;
      if (this.itemEnd > this.totalItems) {
        this.itemEnd = this.totalItems;
      }
    } else {
      this.itemStart = this.itemStart - this.itemPerPage;
      this.itemEnd = this.itemEnd - this.itemPerPage;
    }
    this.onClick.emit(page);
  }

  changeItemPerPage(value: string) {
    this.emitCurr.emit(1); // first current per page
    this.emitItemPerPage.emit(value);
    this.itemStart = 1; //gan lai itemStart
    this.itemEnd = parseInt(value); // gan lai itemEnd
    this.totalPages = Math.ceil(this.totalItems / parseInt(value)); // gan lai totalPages khi thay doi perpage
  }
}
