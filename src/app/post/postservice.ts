import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Post} from './post';


const TOKEN_KEY = 'token';
const header: Headers = new Headers();
// header.append('Authorization', 'Bearer ' + window.sessionStorage.getItem(TOKEN_KEY));
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Bearer ' + window.sessionStorage.getItem(TOKEN_KEY)
  })
};
const deleteOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'responseType': 'text',
    'Authorization': 'Bearer ' + window.sessionStorage.getItem(TOKEN_KEY)
  })
};

@Injectable()
export class PostService {
  post: Post = new Post (0, '', '','');
  posts: Post [] = [];
  constructor(public http: HttpClient) {}
  getPosts() {
    this.http.get('http://localhost:8080/api/post', httpOptions).subscribe((post: Post[]) => this.posts = post);
  }
  postPost() {
    console.log(this.post)
    this.http.post('http://localhost:8080/api/allpost', this.post, httpOptions).subscribe((data: Post) =>  this.posts.push(data));
  }
  updatePost(id: number) {
    this.http.put('http://localhost:8080/api/post/' + id, this.post, httpOptions).subscribe((data: Post) => this.getPosts());
  }
  deletePost(id: number) {
    this.http.delete('http://localhost:8080/api/post/' + id, deleteOptions).subscribe(() => this.getPosts());
    this.getPosts();
  }
}
