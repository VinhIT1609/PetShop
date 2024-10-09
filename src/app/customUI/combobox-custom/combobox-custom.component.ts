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
  // giá trị hiển thị trên cbb và giá trị
  @Input() displayName!: string;
  @Input() value!: string;
  itemSelected!: any;
  nameChooseItem!: string;


  @Input() outputItem: any = '';
  @Output() outputItemChange: EventEmitter<any> = new EventEmitter();
  @Input() isShow = false;
  @Input() placeholder: string = 'Select ...';
  // dữ liệu của cbb
  @Input() dataInput: any[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['outputItem']) {
      this.dataInput.forEach((x) => {
        if (changes['outputItem'].currentValue == x[this.value]) {
          this.nameChooseItem = x[this.displayName];
        }
        if (changes['outputItem'].currentValue == '') {
          this.nameChooseItem = this.placeholder;
        }
      });
    }
  }
  ngOnInit(): void {
    if (this.itemSelected == null) {
      this.itemSelected = {};
      this.nameChooseItem = this.placeholder;
    }
  }

  //function
  //bật tắt modal của combobox
  showListItems() {
    this.isShow = !this.isShow;
  }

  // thay đổi khi chọn
  onClickSelect(item: any) {
    this.isShow = !this.isShow;
    this.nameChooseItem = this.subStringSelected(item[this.displayName]) ?? '';
    this.emitValue(item[this.value]); // chuyển dữ liệu ra bên ngoài
  }
  // khi tên của một data vượt quá 11 ký tự thì các ký tự sau thay thế thành '...'
  subStringSelected(value: string): string {
    if (value.length > 12) {
      return value.substring(0, 11) + '...';
    }
    return value;
  }
  
  //chuyển value ra bên ngoài cha
  emitValue(value: any) {
    this.outputItem = value;
    console.log(this.outputItem);
    this.outputItemChange.emit(value);
  }
}
