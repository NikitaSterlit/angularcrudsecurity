import {HttpClient} from '@angular/common/http';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

export class LoginService {
  constructor(public http: HttpClient, public router: Router) {}
  authUser(myForm: NgForm) {
    this.http.post('localhost:8080/api/auth/', myForm).subscribe((data) => console.log(data));
    this.router.navigate(['/']);
  }
}
