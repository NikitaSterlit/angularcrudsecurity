import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Post} from '../post/post';

const TOKEN_KEY = 'token';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Bearer ' + window.sessionStorage.getItem(TOKEN_KEY)
  })
};
@Injectable()
export class Commentservice {
  comment: Comment = new Comment( '');
  comments: Comment [];
  post: Post;
  constructor(public http: HttpClient) {}
  getComment(id: number) {
    this.http.get('http://localhost:8080/api/comment/' + id, httpOptions)
      .subscribe((data: Comment []) => {console.log(data); this.comments = data; });
  }
  getPostById(id: number) {
    this.http.get('http://localhost:8080/api/posts/' + id, httpOptions)
      .subscribe((data: Post) => {this.post = data; console.log(data); });
  }
  // todo вывести обьект Post, а под ним список комментариев(редактируемые)
}
