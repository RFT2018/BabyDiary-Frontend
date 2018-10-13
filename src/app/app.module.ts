import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { NavComponent } from './nav/nav.component';
import { TimelineComponent } from './pages/timeline/timeline.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegistrationComponent } from './pages/registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavComponent,
    TimelineComponent,
    ProfileComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
