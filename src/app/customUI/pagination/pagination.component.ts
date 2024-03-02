import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent implements OnInit {


  @Input() totalItems: any; // tong sl item
  @Input() currentPage: any; // trang hien tai
  @Input() itemPerPage: any; // sl item 1 trang
  @Output() onClick: EventEmitter<number> = new EventEmitter<number>();
  totalPages = 0; // tong so trang
  pages: number[] = [];


  ngOnInit(): void {
    if (this.totalItems != null) {
      // tong so trang = tong so luong item / so sp 1 trang
      this.totalPages = Math.ceil(this.totalItems / this.itemPerPage);
      // alert(this.totalPages);
      this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
    }
  }

  pageClicked(page: number) {
    // alert(page);
    this.onClick.emit(page);
  }

}
