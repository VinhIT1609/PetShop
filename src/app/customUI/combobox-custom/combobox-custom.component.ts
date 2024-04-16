import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'cbb-custom',
  templateUrl: './combobox-custom.component.html',
  styleUrl: './combobox-custom.component.css',
})
export class ComboboxCustomComponent implements OnInit {
  // value
  @Input() displayName!: string;
  @Input() value!: string;

  itemSelected!: any;
  nameChooseItem!: string;
  @Input() outputItem: any = '';
  @Output() outputItemChange = new EventEmitter();
  @Input() isShow = false;
  @Input() placeholder: string = 'Select ...';

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
  //DATA here !!!
  @Input() dataSourceChild: any[] = [];

  //function
  //show item in cbb
  showListItems() {
    console.log('click!');
    this.isShow = !this.isShow;
  }
  // choose item
  onClickSelect(item: any) {
    this.isShow = !this.isShow;
    console.log('item vua chon: ', item);
    this.nameChooseItem = this.subStringSelected(item[this.displayName]) ?? '';
    // this.emitValue(item.id);
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
    this.outputItem = value;
    this.outputItemChange.emit(value);
  }

  itemCbb: any = {
    id: null,
    loaisp: 'food',
    tensp: 'Bot Chien',
  };
}
