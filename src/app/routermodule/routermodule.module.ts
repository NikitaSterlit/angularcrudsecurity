import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {AuthComponent} from '../auth/auth.component';
import {RegistrComponent} from '../registr/registr.component';
import {PostComponent} from '../post/post.component';
import {PostGuard} from '../auth/postguard';

const routes: Routes = [
  {path: 'login', component: AuthComponent, pathMatch: 'full'},
  {path: 'registr', component: RegistrComponent, pathMatch: 'full'},
  {path: '', redirectTo: 'posts', pathMatch: 'full'},
  {path: 'posts', component: PostComponent, pathMatch: 'full', canActivate: [PostGuard]}
]


@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [PostGuard]
})
export class RoutermoduleModule { }
