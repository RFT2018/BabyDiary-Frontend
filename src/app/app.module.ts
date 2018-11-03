import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/user/login/login.component';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TimelineComponent } from './pages/timeline/timeline.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { ProfileComponent } from './pages/user/profile/profile.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { FooterComponent } from './core/footer/footer.component';
import { RegistrationComponent } from './pages/user/registration/registration.component';
import { ChildComponent } from './pages/child/child.component';
import { BasketComponent } from './pages/basket/basket.component';
import { AdminComponent } from './pages/user/admin/admin.component';
import { MultimediaComponent } from './pages/relaxation/multimedia/multimedia.component';
import { RecipeComponent } from './pages/relaxation/recipe/recipe.component';
import { DocComponent } from './pages/relaxation/doc/doc.component';
import { ChilddevelopmentComponent } from './pages/relaxation/childdevelopment/childdevelopment.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import {AlertModule, BsDropdownModule, CollapseModule} from 'ngx-bootstrap';
import { EventcardPostComponent } from './elements/eventcard-post/eventcard-post.component';
import { EventService } from './shared/service/event.service';
import { EventcardComponent } from './elements/eventcard/eventcard.component';
import {UserService} from './shared/service/user.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    AlertModule.forRoot(),
    AppRoutingModule
  ],
  exports: [ RouterModule ],
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    TimelineComponent,
    ProfileComponent,
    PageNotFoundComponent,
    FooterComponent,
    LoginComponent,
    RegistrationComponent,
    ChildComponent,
    BasketComponent,
    AdminComponent,
    MultimediaComponent,
    RecipeComponent,
    DocComponent,
    ChilddevelopmentComponent,
    AboutusComponent,
    EventcardComponent,
    EventcardPostComponent
  ],
  providers: [
    EventService,
    UserService
  ],
  bootstrap: [
    AppComponent]
})
export class AppModule {
  constructor() {
  }
}
