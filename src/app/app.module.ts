import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {LoginComponent} from './user/login/login.component';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TimelineComponent} from './pages/timeline/timeline.component';
import {NavbarComponent} from './core/navbar/navbar.component';
import {ProfileComponent} from './user/profile/profile.component';
import {PageNotFoundComponent} from './core/page-not-found/page-not-found.component';
import {FooterComponent} from './core/footer/footer.component';
import {RegistrationComponent} from './user/registration/registration.component';
import { ChildComponent } from './pages/child/child.component';
import { BasketComponent } from './pages/basket/basket.component';
import { AdminComponent } from './admin/admin.component';
import { MultimediaComponent } from './pages/relaxation/multimedia/multimedia.component';
import { RecipeComponent } from './pages/relaxation/recipe/recipe.component';
import { DocComponent } from './pages/relaxation/doc/doc.component';
import { ChilddevelopmentComponent } from './pages/relaxation/childdevelopment/childdevelopment.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { BsDropdownModule, CollapseModule} from 'ngx-bootstrap';
import { TimelinePostComponent } from './elements/timeline-post/timeline-post.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot()
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
    TimelinePostComponent
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent]
})
export class AppModule {
  constructor() {
  }
}
