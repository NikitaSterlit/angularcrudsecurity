import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {getToken} from 'codelyzer/angular/styles/cssLexer';
import {Injectable} from '@angular/core';

const TOKEN_KEY = 'token';

@Injectable()
export class PostGuard implements CanActivate {
  constructor(public router: Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     if (window.sessionStorage.getItem(TOKEN_KEY) != null) {
       return true;
     }
       this.router.navigate(['/login']);    // todo написать страницу Вывода всех постов, с возможностью редактирования, удаления и создания новых постов
       return false;
  }
}
