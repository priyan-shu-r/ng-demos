import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MainPageComponent } from './modules/components/main-page/main-page.component';
import { HeaderComponent } from './modules/components/header/header.component';
import { InstaFeedComponent } from './modules/components/insta-feed/insta-feed.component';
import { InstaStoriesComponent } from './modules/components/insta-stories/insta-stories.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ForgotPasswordComponent,
    MainPageComponent,
    HeaderComponent,
    InstaFeedComponent,
    InstaStoriesComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
