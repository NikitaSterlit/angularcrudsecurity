import {HttpClient} from '@angular/common/http';
import {NgForm} from '@angular/forms';

export class LoginService {
  constructor(public http: HttpClient) {}
  authUser(myForm: NgForm) {
    this.http.post('localhost:8080/api//auth/', myForm).subscribe((data) => console.log(data));
  }
}
