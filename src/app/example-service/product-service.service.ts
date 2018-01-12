import { Injectable } from '@angular/core';

@Injectable()
export class ProductServiceService {

  constructor() { }

  products = [
  	{
  		name:"apple",
  		isSold: false
  	},
  	{
  		name:"banana",
  		isSold: false
  	},
  	{
  		name:"potato",
  		isSold: false
  	},
  ];

  addProduct(product){
  	this.products.push(product)
  }

}
