import { Component, OnInit, Input } from '@angular/core';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-add-product-item',
  templateUrl: './add-product-item.component.html',
  styleUrls: ['../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'],
})
export class AddProductItemComponent implements OnInit {

  constructor(private productService: ProductServiceService) { }

  products = [];

  OnInit(){
  	this.products = this.productService.products;
  }

  productName:string;
  // productSold:any;

  product = {}

  addProduct(){
  	this.product = {
	  	name: this.productName,
	  	// isSold: this.productSold
	}
  	this.productService.addProduct(this.product);
  }

}
