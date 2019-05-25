import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {Commentservice} from './commentservice';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  id: number;

  constructor(private activateRoute: ActivatedRoute, private http: Commentservice) {
    this.id = activateRoute.snapshot.params['id'];
  }
  ngOnInit() {
    this.http.getComment(this.id);
    this.http.getPostById(this.id);
  }
}
