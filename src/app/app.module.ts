import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegistrComponent } from './registr/registr.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AuthComponent } from './auth/auth.component';
import {LoginService} from './auth/loginservice';
import { PostComponent } from './post/post.component';
import {RoutermoduleModule} from './routermodule/routermodule.module';
import {PostService} from './post/postservice';

@NgModule({
  declarations: [
    AppComponent,
    RegistrComponent,
    AuthComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RoutermoduleModule

  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
