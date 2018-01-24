import { Component, OnInit, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['../../../node_modules/bootstrap/dist/css/bootstrap.min.css', './users.component.css']
})
export class UsersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  users: [{
  	id:number,
  	name:string,
    age:string
  }] = [
  	{
  		id:1,
  		name: 'Jojn',
      age: '25'
  	},
  	{
  		id:2,
  		name: 'Sam',
      age: '22'
  	},
  	{
  		id:3,
  		name: 'Loyd',
      age: '37'
  	}
  ];

  updateUsers( user:{id:number, name: string, age: string} ){
  	this.users.push(user)
  }

  /*****Example for tabs*******/

  items = [1,2,3,4,5];
  current = 0;

  getAllElements(elements, callback){
    for(let i = 0; i < elements.length; i++){
      callback(elements[i])
    }
  }

  setColor(el){
    el.style.background = '#333'
  }

  changeTab(item:number, e){
    let allLi = e.target.parentNode.querySelectorAll('li');

    this.getAllElements(allLi, this.setColor)
    
    e.target.style.background = 'pink';
    this.current = item
  }

  /*****Example for pipes*******/

  pow:number = 2

}
