import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }

  isLoggedIn = false;

  isAuth(){
  	return new Promise((resolve, reject) => {
  		setTimeout(() => {
  			resolve(this.isLoggedIn)
  		}, 1000)
  	})
  }

  logIn(){
  	this.isLoggedIn = true;
  }

  logOut(){
  	this.isLoggedIn = false;
  }

}
