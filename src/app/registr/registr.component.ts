import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SignUpForm} from './signupform';
import {RegistrResponse} from './registrResponse';

@Component({
  selector: 'app-registr',
  templateUrl: './registr.component.html',
  styleUrls: ['./registr.component.css']
})
export class RegistrComponent {
  role: string [] = ['admin', 'user', 'pm'];
  authForm: FormGroup;
  constructor(public http: HttpClient) {
    this.authForm = new FormGroup({
      name: new FormControl('name', Validators.required),
      username: new FormControl('username', Validators.required),
      email: new FormControl('email', Validators.required),
      password: new FormControl('password', Validators.required),
      role: new FormControl('role', Validators.required)
    });
}
submit(data) {
    console.log(data);
    const signUp: SignUpForm = new SignUpForm(data.name, data.username, data.email, data.password, data.role);
    this.http.post('http://localhost:8080/api/auth/signup', signUp).subscribe((data1: RegistrResponse) => console.log(data1));
}
}
