import { Component, OnInit, Input } from '@angular/core';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'],
})
export class ProductItemComponent {

  constructor(private productService: ProductServiceService) { }

  @Input() productItem;

  setClass(){
  	return {
  		'list-group-item-success': !this.productItem.isSold,
  		'list-group-item-danger': this.productItem.isSold
  	}
  }

  onAction(type: string){
  	this.productItem.isSold = (type === 'buy') ? true : false;
  }

}