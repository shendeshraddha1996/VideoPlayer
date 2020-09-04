import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomePageComponent } from './home-page/home-page.component';


const routes: Routes = [
  {path:'login',component:LoginPageComponent},
  {path:'resetpassword',component:ResetPasswordComponent},
  {path:'home',component:HomePageComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path:'signup',component:SignUpComponent},
  {path:'**',component:ErrorPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
