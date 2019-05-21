import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';


const TOKEN_KEY = 'token';
const header: Headers = new Headers();
header.append('Authorization', 'Bearer ' + window.sessionStorage.getItem(TOKEN_KEY));

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})





export class PostComponent implements OnInit {
  constructor(public http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost:8080/api/post/my').subscribe((data) => console.log(data));
  }

}
