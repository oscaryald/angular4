import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  users: [{
  	id:number,
  	name:string
  }] = [
  	{
  		id:1,
  		name: 'Jojn'
  	},
  	{
  		id:2,
  		name: 'Sam'
  	},
  	{
  		id:3,
  		name: 'Loyd'
  	}
  ];

  updateUsers( user:{id:number, name: string} ){
  	this.users.push(user)
  }

}
