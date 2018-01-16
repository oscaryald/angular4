import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['../../../node_modules/bootstrap/dist/css/bootstrap.min.css','./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  id = 0; 
  name = "Default car";
  year = '2017';

  car:{id:number,name:string,year:string}

  @Output() 
  onAddCar = new EventEmitter<{id:number,name:string,year:string}>();

  addCar(){
  	this.car = {
  		id: this.id,
  		name: this.name,
  		year: this.year
  	}
  	this.onAddCar.emit(this.car);
  }

}
