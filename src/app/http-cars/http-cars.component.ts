import { Component, OnInit } from '@angular/core';
import { CarsService } from '../cars-service/cars.service';

interface Cars {
	id: number,
	name: string,
	year: string,
}

@Component({
  selector: 'app-http-cars',
  templateUrl: './http-cars.component.html',
  styleUrls: ['../../../node_modules/bootstrap/dist/css/bootstrap.min.css','./http-cars.component.css']
})
export class HttpCarsComponent implements OnInit {

  constructor(private carsService: CarsService) { }

  ngOnInit() {
  	
  }

  cars: Cars[] = [];
  carName: string

  loadCars(){
  		this.carsService
	  		.getCars()
	  		.subscribe((cars: Cars[]) => {
	  			console.log(cars)
	  			this.cars = cars
	  		})
  }

  addCar(){
  	this.carsService
  		.addCar(this.carName)
  		.subscribe((car => {
	  		console.log(car)
	  		this.cars.push(car)
	  	})
  	this.carName = '';
  }

}
