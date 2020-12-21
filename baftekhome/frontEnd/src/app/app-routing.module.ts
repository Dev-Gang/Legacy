import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { GuestSignUpComponent } from './guest/guest-sign-up/guest-sign-up.component';
import { HostSignUpComponent } from './host/host-sign-up/host-sign-up.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { GuestSinglePostViewComponent} from './guest/guest-single-post-view/guest-single-post-view.component'

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'HostSignUp', component: HostSignUpComponent},
  {path: 'GuestSignUp', component: GuestSignUpComponent},
  {path: 'GuestSinglePostView', component: GuestSinglePostViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
// {path: 'sign-up', component: HostSignUpComponent}
}