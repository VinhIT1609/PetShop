import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiServicesService } from '../../../../../../../../../SYS/services/api-services.service';
import { NotificationService } from '../../../../../../../../../SYS/services/notification.service';
@Component({
  selector: 'app-dialog_pet',
  templateUrl: './dialog_pet.component.html',
  styleUrls: ['./dialog_pet.component.css'],
})
export class DialogPetComponent implements OnInit {
  isOpenForm: boolean = false;
  isEdit!: boolean;
  fontSize: string = '24';
  titleList: string[] = ['NEW PET', 'UPDATE PET'];
  title: string = '';
  buttonContentList: string[] = ['CONFIRM', 'UPDATE PET'];
  buttonContent: string = '';
  // output
  @Output() callReloadTable_Pet_Dialog: EventEmitter<any> = new EventEmitter();
  constructor(
    private apiService: ApiServicesService,
    private notification: NotificationService
  ) {}
  ngOnInit() {}
  // object
  Pet: any = {
    CategoryCode: '',
    Name: '',
    StatusID: '',
  };
  dataStatus: any[] = [
    {
      id: 1,
      status: 'Active',
      value: true,
    },
    {
      id: 2,
      status: 'Deactive',
      value: false,
    },
    {
      id: 3,
      status: 'Disabled',
      value: false,
    },
  ];
  clearObject() {
    for (let key in this.Pet) {
      if (this.Pet.hasOwnProperty(key)) {
        this.Pet[key] = '';
      }
    }
  }
  bindObject(value?: any) {
    this.Pet['CategoryID'] = value['CategoryID'];
    for (let key in value) {
      if (this.Pet.hasOwnProperty(key)) {
        if (key != 'CategoryID') {
          this.Pet[key] = value[key];
        }
      }
    }
  }
  toggleShowOverlay(value?: any) {
    if (!value) {
      this.isEdit = false;
      this.title = this.titleList[0];
      this.buttonContent = this.buttonContentList[0];
      this.clearObject();
      this.isOpenForm = !this.isOpenForm;
    } else {
      this.isEdit = true;
      this.title = this.titleList[1];
      this.buttonContent = this.buttonContentList[1];
      this.bindObject(value);
      this.isOpenForm = !this.isOpenForm;
    }
  }
  onOpenEdit(value?: any) {
    this.toggleShowOverlay(value);
  }
  propagation(event: Event) {
    event.stopPropagation();
  }
  addPet() {
    this.apiService
      .Call_API('Pet/AddPet', 'post', null, this.Pet)
      ?.subscribe((x) => {
        if (x[0]['result'] == 1) {
          this.notification.success('ADD', 'Thêm thành công !', 3000);
          this.reloadData();
          this.isOpenForm = !this.isOpenForm;
        } else {
          this.notification.error('ERROR', 'Thêm thất bạn', 3000);
        }
      });
  }
  updatePet() {
    this.apiService
      .Call_API('Pet/UpdatePet', 'post', null, this.Pet)
      ?.subscribe((x) => {
        if (x[0]['result'] == 1) {
          this.notification.success('UPDATE', 'Cập nhật thành công !', 3000);
          this.reloadData();
          // this.isOpenForm = !this.isOpenForm;
        } else {
          this.notification.error('UPDATE', 'Cập nhật thất bại !', 3000);
        }
      });
  }

  removePet(listPet: any[]) {
    // console.log(listPet);
    let tempList: any[] = [];
    listPet.forEach((Pet) => {
      tempList.push(Pet.CategoryID);
    });
    this.apiService
      .Call_API('Pet/DeletePet', 'post', null, tempList.toString())
      ?.subscribe((x) => {
        if (x[0]['result'] == 1) {
          this.notification.success('UPDATE', 'Xoa thành công !', 3000);
          this.reloadData();
        }
      });
  }
  reloadData() {
    this.callReloadTable_Pet_Dialog.emit('reload table');
  }
  addORupdate() {
    if (this.isEdit) {
      this.updatePet();
    } else {
      this.addPet();
    }
  }
}
