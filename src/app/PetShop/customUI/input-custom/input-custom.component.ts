import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  forwardRef,
} from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input-custom',
  templateUrl: './input-custom.component.html',
  styleUrls: ['./input-custom.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputCustomComponent),
      multi: true,
    },
  ],
})
export class InputCustomComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  // các giá trị truyền từ cha vào
  @Input() placeholderInput: string = '';
  @Input() typeInput?: 'text' | 'password' | 'email' | 'number' | 'file';
  @Input() fontSizeInput: string = '16px';
  @Output() keyDown_Enter: EventEmitter<any> = new EventEmitter<any>();
  // các giá trị truyền ra cha chứa component con
  internalValue: any = '';
  // các hàm xử lý thay đổi
  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(value: any): void {
    this.internalValue = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onInputChange(event: any) {
    this.internalValue = event.target.value;
    this.onChange(this.internalValue);
  }
  enter(event: any) {
    this.keyDown_Enter.emit(event);
  }
}
