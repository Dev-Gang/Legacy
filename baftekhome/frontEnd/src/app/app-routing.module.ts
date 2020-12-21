import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { GuestSignUpComponent } from './guest/guest-sign-up/guest-sign-up.component';
import { HostSignUpComponent } from './host/host-sign-up/host-sign-up.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { GuestFeedComponent } from './guest/guest-feed/guest-feed.component';
import { HostHistoryComponent } from './host/host-history/host-history.component';
import { HostProfileComponent } from './host/host-profile/host-profile.component';
import { HostSinglePostViewComponent } from './host/host-single-post-view/host-single-post-view.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'HostSignUp', component: HostSignUpComponent},
  {path: 'GuestSignUp', component: GuestSignUpComponent},
  {path: 'GuestFeed', component: GuestFeedComponent},
  { path: "history", component: HostHistoryComponent },
  { path: "profile", component: HostProfileComponent },
  { path: "newPost", component: HostSinglePostViewComponent },
  { path: "formulaire", component: HostSignUpComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
