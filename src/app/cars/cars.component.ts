import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['../../../node_modules/bootstrap/dist/css/bootstrap.min.css', './cars.component.css']
})

export class CarsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  cars: [{id:number,name:string,year:number}] = [
		{
		  	id: 1,
		  	name: "Audi",
		  	year: 1999
		},
		{
		  	id: 2,
		  	name: "BMW",
		  	year: 2005
		},
		{
		  	id: 3,
		  	name: "Toyota",
		  	year: 2012
		},	 
  ]

  updateCarList(car:{id:number,name:string,year:number}){
    this.cars.push(car);
  }

}
