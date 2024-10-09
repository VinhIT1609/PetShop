import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent implements OnInit {
  // các Input dữ liệu từ table
  @Input() totalItems!: number;
  @Input() currentPage!: number;
  @Input() itemPerPage: number = 10;
  itemPerPages: any[] = [
    { id: 1, number: 10 },
    { id: 2, number: 50 },
    { id: 3, number: 100 },
  ];
  totalPages: number = 0;
  //các dữ liệu Output
  @Output() onClick: EventEmitter<number> = new EventEmitter();
  @Output() changeItemPerPage = new EventEmitter(); // thay đổi itemPerPage hiện thị trên table
  @Output() currentPageChange = new EventEmitter(); // thay đổi currentPage để khi đổi itemPerPage thì phân trang lại
  constructor() {}
  ngOnInit() {}
  ngOnChanges(changes: SimpleChanges) {
    if (changes['totalItems']) {
      this.totalPages = Math.ceil(
        changes['totalItems'].currentValue / this.itemPerPage
      );
    }
  }

  // function
  buttonClicked(options: string) {
    switch (options) {
      case 'next':
        this.onClick.emit(this.currentPage + 1);
        break;
      case 'previous':
        this.onClick.emit(this.currentPage - 1);
        break;
    }
  }

  // khi thay đổi số lượng hiện thị thì đồng thời thay đổi currentPage để chia lại dữ liệu
  // flow data sẽ từ cbb-custom -> pagination -> table-custom
  onItemPerPageChange_pagination(value: any) {
    this.changeItemPerPage.emit(value);
    this.totalPages = Math.ceil(this.totalItems / value);
    if (this.currentPage > this.totalPages) {
      this.currentPage = this.totalPages;
      this.currentPageChange.emit(this.currentPage);
    }
  }
}
