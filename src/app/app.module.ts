import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';




import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import { CarComponent } from './car/car.component';
import { AddCarComponent } from './add-car/add-car.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';
import { AddUserComponent } from './add-user/add-user.component';
import { Example1Directive } from './directives/example-1.directive';
import { PowPipe } from './pipe-example/pow.pipe';
import { CarFilterPipe } from './pipe-example/car-filter.pipe';
import { ProductComponent } from './example-service/product/product.component';
import { ProductServiceService } from './example-service/product-service.service';
import { ProductItemComponent } from './example-service/product-item/product-item.component';
import { AddProductItemComponent } from './example-service/add-product-item/add-product-item.component';


@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    CarComponent,
    AddCarComponent,
    UserComponent,
    UsersComponent,
    AddUserComponent,
    Example1Directive,
    PowPipe,
    CarFilterPipe,
    ProductComponent,
    ProductItemComponent,
    AddProductItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ProductServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
