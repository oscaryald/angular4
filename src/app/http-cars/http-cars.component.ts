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

  cars: any = [];
  carName: string;
  carsTitle: string;

  ngOnInit() {
    // You must runing server, try "json-server --watch db.json"
   // this.carsTitle = this.carsService.getCarsTitle()
  }

  getYears(){
    let date = new Date(),
       todayYear = date.getFullYear(),
       fromYear = 2000,
       years = [];
    for(fromYear; fromYear < todayYear; fromYear++){
      let year = fromYear;
      years.push(year)
    }
    return years
  }

  getRandomYear(){
    const num = Math.round(Math.random() * (this.getYears().length - 1));
    return this.getYears()[num]
  }

  loadCars(){
  		this.carsService
	  		.getCars()
	  		.subscribe((cars: Cars[]) => {
	  			console.log(cars)
	  			this.cars = cars
	  		},
        (error) => {
          alert(error)
        })
      // this.cars = this.carsService.getCars()
  }

  addCar(){
  	this.carsService
  		.addCar(this.carName)
  		.subscribe((car) => {
	  		console.log(car)
	  		this.cars.push(car)
	  	});
  	this.carName = '';
  }

  setNewYear(car:Cars[]){
      this.carsService
      .changeYear(car, this.getRandomYear())
      .subscribe((car) => {
        console.log(car);
      })
  }

  deleteCar(car){
    this.carsService
        .deleteCar(car)
        .subscribe(() => {
            this.cars = this.cars.filter((carEl) => {
              return carEl.id !== car.id
            });
            // this.cars.splice(this.cars.indexOf(car), 1); // it also work!
        });
  }

}
