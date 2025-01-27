import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { GuestSignUpComponent } from "./guest/guest-sign-up/guest-sign-up.component";
import { HostSignUpComponent } from "./host/host-sign-up/host-sign-up.component";
import { LoginComponent } from "./login/login.component";
import { GuestFeedComponent } from "./guest/guest-feed/guest-feed.component";
import { HostHistoryComponent } from "./host/host-history/host-history.component";
import { GuestSinglePostViewComponent } from "./guest/guest-single-post-view/guest-single-post-view.component";
import { HostSinglePostViewComponent } from "./host/host-single-post-view/host-single-post-view.component";
import { GuestProfileComponent } from "./guest/guest-profile/guest-profile.component";
import { HostProfileComponent } from "./host/host-profile/host-profile.component";
import { HttpClientModule } from "@angular/common/http"; // Add this
import { SignUpComponent } from "./sign-up/sign-up.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GuestSignUpComponent,
    HostSignUpComponent,
    LoginComponent,
    GuestFeedComponent,
    HostHistoryComponent,
    GuestSinglePostViewComponent,
    HostSinglePostViewComponent,
    GuestProfileComponent,
    HostProfileComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
