import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'],
})
export class ProductComponent implements OnInit {

  constructor(private productService: ProductServiceService) { }

  products = []

  ngOnInit() {
  	this.products = this.productService.products
  }


}
