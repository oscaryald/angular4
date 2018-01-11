import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'carFilter',
  pure:false
})

export class CarFilterPipe implements PipeTransform {

  transform(carList, searchStr: string, fieldNameArr: any): any {
    if(carList.length === 0 || searchStr === ''){
    	return carList;
    }

   	let searchCars =  carList.filter((car) => {

   			for(let i = 0; i < fieldNameArr.length; i++){
   				if(!car.hasOwnProperty(fieldNameArr[i])) break;
	   			if(car[fieldNameArr[i]].toLowerCase().indexOf(searchStr.toLowerCase()) !== -1) return true
   			}

   	})

	return searchCars;
  }

}
