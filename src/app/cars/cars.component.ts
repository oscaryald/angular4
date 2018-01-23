import { Component, OnInit } from '@angular/core';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['../../../node_modules/bootstrap/dist/css/bootstrap.min.css', './cars.component.css']
})

export class CarsComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }
  
  cars: [{id:number,name:string,year:string}] = [
		{
		  	id: 1,
		  	name: "Audi",
		  	year: '1999'
		},
		{
		  	id: 2,
		  	name: "BMW",
		  	year: '2005'
		},
		{
		  	id: 3,
		  	name: "Toyota",
		  	year: '2012'
		},	 
  ]

  updateCarList(car:{id:number,name:string,year:string}){
    this.cars.push(car);
  }

  searchCar:string = '';

  asyncTitle = Observable.of('Async title 3 seconds with pipe').delay(3000);

  changeAuthStatus(status: string){
  	if(status === 'login'){
  		this.auth.logIn()
  	}else{
  		this.auth.logOut()
  	}
  }



}
