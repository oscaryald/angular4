import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  id:number;
  name:string;


  @Output()
  addObservable = new EventEmitter<{id:number, name:string}>();

  user = {}

  addUser(){
  	this.user = {
  		id:this.id,
  		name:this.name
  	}
  	this.addObservable.emit(this.user)
  }

}
