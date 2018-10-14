import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './user/login/login.component';
import {TimelineComponent} from './pages/timeline/timeline.component';
import {ProfileComponent} from './user/profile/profile.component';
import {PageNotFoundComponent} from './core/page-not-found/page-not-found.component';
import {RegistrationComponent} from './user/registration/registration.component';
import {ChildComponent} from './pages/child/child.component';
import {BasketComponent} from './pages/basket/basket.component';
import {AdminComponent} from './admin/admin.component';
import {MultimediaComponent} from './pages/relaxation/multimedia/multimedia.component';
import {RecipeComponent} from './pages/relaxation/recipe/recipe.component';
import {DocComponent} from './pages/relaxation/doc/doc.component';
import {ChilddevelopmentComponent} from './pages/relaxation/childdevelopment/childdevelopment.component';
import {AboutusComponent} from './pages/aboutus/aboutus.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'child', component: ChildComponent },
  { path: 'timeline', component: TimelineComponent },
  { path: 'basket', component: BasketComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'multimedia', component: MultimediaComponent },
  { path: 'recipe', component: RecipeComponent },
  { path: 'doc', component: DocComponent },
  { path: 'childdevelopment', component: ChilddevelopmentComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
