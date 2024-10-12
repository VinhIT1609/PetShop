import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-masterPet',
  templateUrl: './masterPet.component.html',
  styleUrls: ['./masterPet.component.css'],
})
export class MasterPetComponent implements OnInit {
  isDisplay: boolean = true;
  isReload_Master!: any;
  tagList: string[] = ['Pet List', 'Pet Category', 'Pet Hotel'];
  // value
  petColumns: any[] = [
    { Head: 'ID', FieldName: 'PetID' },
    { Head: 'Name', FieldName: 'PetName' },
    { Head: 'Gender', FieldName: 'Gender' },
    { Head: 'Owner', FieldName: 'Owner' },
  ];

  constructor() {}

  ngOnInit() {}
  handleTag(tag: any) {
    switch (tag) {
      case this.tagList[0]:
        this.isDisplay = true;
        break;
      case this.tagList[1]:
        this.isDisplay = false;
        break;
    }
  }

  callForm_Pet(value: any) {
    console.log(value);
  }
}
