import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CarsService {

  constructor(private http: Http) { }

  getCarsTitle(){
    return this.http.get('http://localhost:3000/title')
                    .map((response: Response) => response.json())
                    .map((data) => data.value)
  }

  getCars(){
  	return this.http.get('http://localhost:3000/cars')
  					        .map((response: Response) => response.json())
                    .catch((error: Response) => {
                      return Observable.throw(' Server is not runing, try "json-server --watch db.json" ');
                    })
  						
  }

  addCar(carName: string){
  	const data = {
  		name: carName,
  		year: '2018'
  	}

  	return this.http.post('http://localhost:3000/cars', data)
  					        .map((response: Response) => response.json())
  }

  changeYear(car: any, year: any){
    car.year = year;
    return this.http.put(`http://localhost:3000/cars/${car.id}`, car)
                    .map((response: Response) => response.json())

  }

  deleteCar(car: any){
    return this.http.delete(`http://localhost:3000/cars/${car.id}`)
                    .map((response: Response) => response.json())
  }
}
