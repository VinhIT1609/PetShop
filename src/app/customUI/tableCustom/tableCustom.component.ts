import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tableCustom',
  templateUrl: './tableCustom.component.html',
  styleUrls: ['./tableCustom.component.css']
})
export class TableCustomComponent implements OnInit {
  @Input() tableHeaders: any[] = [];
  @Input() tableContents: any = [];
  @Input() actionValues: any[] = []
  constructor() { }

  ngOnInit() {
  }

}
