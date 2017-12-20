import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})

export class CarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  carName = '';
  carYear = '2017';

  carItem = {
  	id:number,
  	name:string,
  	year:number
  }

  getName(){
  	return this.carName;
  }



  addCar(){


  }



}
