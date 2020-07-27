import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainPageComponent} from "./components/main-page/main-page.component";
import {RegisterComponent} from "./components/register/register.component";
import {LoginComponent} from "./components/login/login.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {CompanyComponent} from "./components/company/company.component";
import {EquipmentComponent} from "./components/equipment/equipment.component";
import {CompanyDetailsComponent} from "./components/company-details/company-details.component";
import {SettingsComponent} from "./components/settings/settings.component";
import {AddDeviceComponent} from "./components/add-device/add-device.component";
import {AddFactoryComponent} from "./components/add-factory/add-factory.component";

const routes: Routes = [
  {path: '', component:MainPageComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'profile', component:ProfileComponent},
  {path: 'company', component:CompanyComponent},
  {path: 'company/equipment', component:EquipmentComponent},
  {path: 'company/details', component:CompanyDetailsComponent},
  {path: 'login', component:LoginComponent},
  {path: 'settings', component:SettingsComponent},
  {path: 'device/add', component:AddDeviceComponent},
  {path: 'company/add', component:AddFactoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
