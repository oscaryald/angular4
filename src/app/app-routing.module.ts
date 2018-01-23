import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { CarsComponent } from './cars/cars.component';
import { ProductComponent } from './example-service/product/product.component';
import { Form1Component } from './form1/form1.component';
import { Form2Component } from './form2/form2.component';
import { HttpCarsComponent } from './http-cars/http-cars.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { AuthGuardService } from './auth-guard.service';



const appRoutes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		component: CarsComponent
	},
	{
		path: 'users',
		component: UsersComponent,
		canActivate: [ AuthGuardService ],
		children:[
			{
				path: ':id',
				component: UserComponent
			},
		]
	},
	{
		path: 'product',
		component: ProductComponent
	},
	{
		path: 'form1',
		component: Form1Component
	},
	{
		path: 'form2',
		component: Form2Component
	},
	{
		path: 'load-f-http',
		component: HttpCarsComponent
	},
	{
		path: 'load-f-http',
		component: HttpCarsComponent
	},
	{
		path: '**',
		component: NotFoundComponent
	},
	// {
	// 	path: '**',
	// 	redirectTo: '/'
	// },
]

@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes)
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule{

}