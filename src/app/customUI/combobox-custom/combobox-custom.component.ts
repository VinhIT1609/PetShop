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
  selector: 'cbb-custom',
  templateUrl: './combobox-custom.component.html',
  styleUrl: './combobox-custom.component.css',
})
export class ComboboxCustomComponent implements OnInit, OnChanges {
  // value
  @Input() displayName!: string;
  @Input() value!: string;

  itemSelected!: any;
  nameChooseItem!: string;
  @Input() outputItem: any = '';
  @Output() outputItemChange = new EventEmitter();
  @Input() isShow = false;
  @Input() placeholder: string = 'Select ...';
  //DATA here !!!
  @Input() dataSourceChild: any[] = [];
  ngOnChanges(changes: SimpleChanges): void {
    debugger;
    if (changes['outputItem']) {
      this.dataSourceChild.forEach((x) => {
        if (changes['outputItem'].currentValue == x[this.value]) {
          this.nameChooseItem = x[this.displayName];
        }
      });
    }
  }
  // khi moi khoi tao
  ngOnInit(): void {
    if (this.itemSelected == null) {
      // console.log('dataSource null !!!');
      this.itemSelected = {};
      this.nameChooseItem = this.placeholder;
    }
    // filter
    // let dataSourceFiltered = this.dataSourceChild.filter(x => x.id == this.outputItem);
    // if (dataSourceFiltered.length > 0) {
    //   this.itemSelected = dataSourceFiltered[0];
    //   this.nameChooseItem = this.itemSelected[this.displayName] ?? '';
    // }
    // console.log(this.outputItem);
  }

  //function
  //show item in cbb
  showListItems() {
    this.isShow = !this.isShow;
  }

  // choose item
  onClickSelect(item: any) {
    this.isShow = !this.isShow;
    console.log('item vua chon: ', item);
    this.nameChooseItem = this.subStringSelected(item[this.displayName]) ?? '';
    this.emitValue(item[this.value]);
    // console.log(value);
    // this.itemSelected = item;
    // console.log(item[this.displayName]);
  }
  // chuyen string qua 11 ky tu thanh ...
  subStringSelected(value: string): string {
    if (value.length > 12) {
      return value.substring(0, 11) + '...';
    }
    return value;
  }
  //chuyen gia tri ra ben ngoai parent
  emitValue(value: any) {
    console.log(value);
    this.outputItem = value;
    this.outputItemChange.emit(value);
  }

  itemCbb: any = {
    id: null,
    loaisp: 'food',
    tensp: 'Bot Chien',
  };
}
