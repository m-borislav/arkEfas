import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainPageComponent} from "./components/main-page/main-page.component";
import {RegistrationComponent} from "./components/registration/registration.component";
import {SignInComponent} from "./components/sign-in/sign-in.component";


const routes: Routes = [
  {path: '', component:MainPageComponent},
  {path: 'registration', component:RegistrationComponent},
  {path: 'sign-in', component:SignInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
