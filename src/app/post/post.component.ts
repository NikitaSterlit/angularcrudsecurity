import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PostService} from './postservice';
import {Post} from './post';
import { HttpHeaders } from '@angular/common/http';
import {NgForm} from '@angular/forms';




@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})


export class PostComponent implements OnInit {
  constructor(public httpService: PostService) {
  }

  ngOnInit() {
    this.httpService.getPosts();
    this.resetForm();
  }

  addPost(myFirm: NgForm) {
    if (myFirm.value.id === 0) {
      this.httpService.postPost();
      this.resetForm();
    } else {
      this.httpService.updatePost(myFirm.value.id);
      this.resetForm();
    }
  }

  delete(id: number) {
    this.httpService.deletePost(id);
  }

  showForEdit(post: Post) {
    this.httpService.post = Object.assign({}, post);
  }
  resetForm(myForm?: NgForm) {
    if (myForm != null) {
      myForm.reset();
      this.httpService.post = {
        id: 0,
        title: '',
        description: '',
        content: '',
      };
    }
  }
}
