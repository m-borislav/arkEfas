import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { LoginComponent } from './components/login/login.component';
import { AboutComponent } from './components/about/about.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CompanyComponent } from './components/company/company.component';
import { MeasuringComponent } from './components/measuring/measuring.component';
import { EquipmentComponent } from './components/equipment/equipment.component';
import { AddDeviceComponent } from './components/add-device/add-device.component';
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { CompanyDetailsComponent } from './components/company-details/company-details.component';
import { SettingsComponent } from './components/settings/settings.component';

import '@angular/localize/init';
import { AddFactoryComponent } from './components/add-factory/add-factory.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    MainPageComponent,
    LoginComponent,
    AboutComponent,
    ProfileComponent,
    CompanyComponent,
    MeasuringComponent,
    EquipmentComponent,
    AddDeviceComponent,
    CompanyDetailsComponent,
    SettingsComponent,
    AddFactoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
