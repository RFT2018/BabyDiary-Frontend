import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { NavComponent } from './nav/nav.component';
import { TimelineComponent } from './pages/timeline/timeline.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import {Routes} from '@angular/router';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavComponent,
    TimelineComponent,
    ProfileComponent,
    RegistrationComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

const appRoutes: Routes = [{
    path: 'login',
    pathMatch: 'full',
    component: LoginComponent
  }, {
  path: 'registration',
  pathMatch: 'full',
  component: RegistrationComponent
  }, {
    path: 'timeline',
    pathMatch: 'full',
    component: TimelineComponent
  }
];
