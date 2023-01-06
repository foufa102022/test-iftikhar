import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthentificationComponent } from './authentification/authentification.component';
import { PostItemComponent } from './post-item/post-item.component';
import { PostListeComponent } from './post-liste/post-liste.component';

const routes: Routes = [
  {path: 'post-liste', component:PostListeComponent },
  {path: 'post-item', component:PostItemComponent },
  {path: 'authentification', component:AuthentificationComponent },

  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
