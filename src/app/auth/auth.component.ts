import { Component, OnInit } from '@angular/core';
import {LoginService} from './loginservice';
import {NgForm} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {AuthForm} from './authform';
import {Router} from '@angular/router';

const TOKEN_KEY = 'token';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  form: any = {};
  form1: AuthForm = new AuthForm('', '');
  constructor(public http: HttpClient, private router: Router) { }
  // submit() {
  //   const authForm: AuthForm = new AuthForm(this.form1.username, this.form1.password);
  //   this.http.post('http://localhost:8080/api/auth/signin', this.form1).subscribe( data => {
  //     this.saveToken(data.accessToken);
  //     this.router.navigate(['/']);
  //   });
  // }
  public saveToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

}
