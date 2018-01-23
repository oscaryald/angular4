import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouterSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private auth: AuthService) { }

  canActivate (route: ActivatedRouterSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise | boolean {
  	return this.auth.isAuth().then((isLoggedIn: boolean) => {
  		if(isLoggedIn){
  			return true;
  		}else{
  			return false;
  		}
  	});
  }

}
