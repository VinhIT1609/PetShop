import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterAccountComponent } from './PetShop/components/admin/main_page/main/master_option/account/masterAccount/masterAccount.component';
import { MainComponent } from './PetShop/components/admin/main_page/main/main.component';
import { MasterBranchComponent } from './PetShop/components/admin/main_page/main/master_option/branch/masterBranch/masterBranch.component';
import { MasterProductComponent } from './PetShop/components/admin/main_page/main/master_option/product/masterProduct/masterProduct.component';
import { MasterPetComponent } from './PetShop/components/admin/main_page/main/master_option/pet/masterPet/masterPet.component';
import { MasterKeepingComponent } from './PetShop/components/admin/main_page/main/master_option/keeping/masterKeeping/masterKeeping.component';
import { MasterPromotionComponent } from './PetShop/components/admin/main_page/main/master_option/promotion/masterPromotion/masterPromotion.component';
import { MasterReportComponent } from './PetShop/components/admin/main_page/main/master_option/report/masterReport/masterReport.component';
import { HomeComponent } from './PetShop/components/user/homepage/home/home.component';
import { LogInComponent } from './PetShop/components/Login_Signin/log-in/log-in.component';
import { SingInComponent } from './PetShop/components/Login_Signin/sing-in/sing-in.component';
import { ComboboxCustomComponent } from './PetShop/customUI/combobox-custom/combobox-custom.component';
import { TableCustomComponent } from './PetShop/customUI/tableCustom/tableCustom.component';
import { InputCustomComponent } from './PetShop/customUI/input-custom/input-custom.component';
import { DialogPDCategoryComponent } from './PetShop/components/admin/main_page/main/master_option/product/components/dialogPDCategory/dialogPDCategory.component';

const routes: Routes = [
  {
    path: 'Admin',
    component: MainComponent,
    children: [
      { path: 'Account', component: MasterAccountComponent },
      { path: 'Branch', component: MasterBranchComponent },
      { path: 'Product', component: MasterProductComponent },
      { path: 'Pet', component: MasterPetComponent },
      { path: 'Keeping', component: MasterKeepingComponent },
      { path: 'Promotion', component: MasterPromotionComponent },
      { path: 'Report', component: MasterReportComponent },
    ],
  },
  { path: '', redirectTo: 'Admin', pathMatch: 'full' },
  { path: 'MainPage', component: HomeComponent },
  { path: 'Login', component: LogInComponent },
  { path: 'Signin', component: SingInComponent },
  { path: 'CbbCustom', component: ComboboxCustomComponent },
  { path: 'tableCustom', component: TableCustomComponent },
  { path: 'inputCustom', component: InputCustomComponent },
  { path: 'PDcategoryForm', component: DialogPDCategoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
