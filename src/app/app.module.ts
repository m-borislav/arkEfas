import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { AboutComponent } from './components/about/about.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CompanyComponent } from './components/company/company.component';
import { MeasuringComponent } from './components/measuring/measuring.component';
import { EquipmentComponent } from './components/equipment/equipment.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    MainPageComponent,
    SignInComponent,
    AboutComponent,
    ProfileComponent,
    CompanyComponent,
    MeasuringComponent,
    EquipmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
