import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

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
import { Form1Component } from './form1/form1.component';
import { Form2Component } from './form2/form2.component';

import { CarsService } from './cars-service/cars.service';
import { HttpCarsComponent } from './http-cars/http-cars.component';

import {  AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';

import { AuthGuardService } from './auth-guard.service';
import { AuthService } from './auth.service';





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
    AddProductItemComponent,
    Form1Component,
    Form2Component,
    HttpCarsComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    ProductServiceService,
    CarsService,
    AuthGuardService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
