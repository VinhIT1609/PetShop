import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/user/homepage/nav/nav.component';
import { HomeComponent } from './components/user/homepage/home/home.component';
import { HeaderComponent } from './components/user/homepage/header/header.component';
import { TableCustomComponent } from './customUI/tableCustom/tableCustom.component';
import { MenuComponent } from './components/admin/main_page/main/admin_menu/menu.component';
import { MainComponent } from './components/admin/main_page/main/main.component';
import { UserAvatarComponent } from './components/admin/main_page/main/header_master/userAvatar/userAvatar.component';
import { MasterAccountComponent } from './components/admin/main_page/main/master_option/account/masterAccount/masterAccount.component';
import { MasterBranchComponent } from './components/admin/main_page/main/master_option/branch/masterBranch/masterBranch.component';
import { MasterKeepingComponent } from './components/admin/main_page/main/master_option/keeping/masterKeeping/masterKeeping.component';
import { MasterPetComponent } from './components/admin/main_page/main/master_option/pet/masterPet/masterPet.component';
import { MasterProductComponent } from './components/admin/main_page/main/master_option/product/masterProduct/masterProduct.component';
import { MasterPromotionComponent } from './components/admin/main_page/main/master_option/promotion/masterPromotion/masterPromotion.component';
import { MasterReportComponent } from './components/admin/main_page/main/master_option/report/masterReport/masterReport.component';
import { Header_masterComponent } from './components/admin/main_page/main/header_master/header_master.component';
import { LogInComponent } from './components/Login_Signin/log-in/log-in.component';
import { SingInComponent } from './components/Login_Signin/sing-in/sing-in.component';
import { ComboboxCustomComponent } from './customUI/combobox-custom/combobox-custom.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DialogProductComponent } from './components/admin/main_page/main/master_option/product/components/dialogProduct/dialogProduct.component';
import { NotificationComponent } from './customUI/notification/notification.component';
import { PaginationComponent } from './customUI/tableCustom/pagination/pagination.component';
import { InputCustomComponent } from './customUI/input-custom/input-custom.component';
import { DialogPDCategoryComponent } from './components/admin/main_page/main/master_option/product/components/dialogPDCategory/dialogPDCategory.component';

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
    InputCustomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
