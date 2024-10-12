import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './PetShop/components/user/homepage/nav/nav.component'; 
import { HomeComponent } from './PetShop/components/user/homepage/home/home.component';
import { HeaderComponent } from './PetShop/components/user/homepage/header/header.component';
import { TableCustomComponent } from './PetShop/customUI/tableCustom/tableCustom.component'; 
import { MenuComponent } from './PetShop/components/admin/main_page/main/admin_menu/menu.component';
import { MainComponent } from './PetShop/components/admin/main_page/main/main.component';
import { UserAvatarComponent } from './PetShop/components/admin/main_page/main/header_master/userAvatar/userAvatar.component';
import { MasterAccountComponent } from './PetShop/components/admin/main_page/main/master_option/account/masterAccount/masterAccount.component';
import { MasterBranchComponent } from './PetShop/components/admin/main_page/main/master_option/branch/masterBranch/masterBranch.component';
import { MasterKeepingComponent } from './PetShop/components/admin/main_page/main/master_option/keeping/masterKeeping/masterKeeping.component';
import { MasterPetComponent } from './PetShop/components/admin/main_page/main/master_option/pet/masterPet/masterPet.component';
import { MasterProductComponent } from './PetShop/components/admin/main_page/main/master_option/product/masterProduct/masterProduct.component';
import { MasterPromotionComponent } from './PetShop/components/admin/main_page/main/master_option/promotion/masterPromotion/masterPromotion.component';
import { MasterReportComponent } from './PetShop/components/admin/main_page/main/master_option/report/masterReport/masterReport.component';
import { Header_masterComponent } from './PetShop/components/admin/main_page/main/header_master/header_master.component';
import { LogInComponent } from './PetShop/components/Login_Signin/log-in/log-in.component';
import { SingInComponent } from './PetShop/components/Login_Signin/sing-in/sing-in.component';
import { ComboboxCustomComponent } from './PetShop/customUI/combobox-custom/combobox-custom.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DialogProductComponent } from './PetShop/components/admin/main_page/main/master_option/product/components/dialogProduct/dialogProduct.component';
import { NotificationComponent } from './PetShop/customUI/notification/notification.component';
import { PaginationComponent } from './PetShop/customUI/tableCustom/pagination/pagination.component';
import { InputCustomComponent } from './PetShop/customUI/input-custom/input-custom.component';
import { DialogPDCategoryComponent } from './PetShop/components/admin/main_page/main/master_option/product/components/dialogPDCategory/dialogPDCategory.component';
import { Dialog_pet_hotelComponent } from './PetShop/components/admin/main_page/main/master_option/pet/components/dialog_pet_hotel/dialog_pet_hotel.component';
import { DialogPetComponent } from './PetShop/components/admin/main_page/main/master_option/pet/components/dialog_pet/dialog_pet.component';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    HeaderComponent,
    MenuComponent,
    TableCustomComponent,
    MainComponent,
    UserAvatarComponent,
    Header_masterComponent,
    MasterAccountComponent,
    MasterBranchComponent,
    MasterKeepingComponent,
    MasterPetComponent,
    MasterProductComponent,
    MasterPromotionComponent,
    MasterReportComponent,
    LogInComponent,
    SingInComponent,
    ComboboxCustomComponent,
    DialogProductComponent,
    DialogPDCategoryComponent,
    NotificationComponent,
    PaginationComponent,
    InputCustomComponent,
    DialogPetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
