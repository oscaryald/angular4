import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['../../../node_modules/bootstrap/dist/css/bootstrap.min.css','./form2.component.css']
})
export class Form2Component implements OnInit {

  constructor() { }

  form: FormGroup;

  answers = [
  	{
  		type: 'yes',
  		text: 'yes'
  	},
  	{
  		type: 'no',
  		text: 'no'
  	}
  ];

  charsCount: number = 5;

  ngOnInit() {
  	this.form = new FormGroup({
  		user: new FormGroup({
  			email: new FormControl('', [Validators.required, Validators.email]),
  			password: new FormControl('', [Validators.required, this.checkForLength.bind(this)]),
  		})
  		country: new FormControl('ua'),
  		answer: new FormControl('no'),
  	})
  }

  onSubmit(){
  	console.log(this.form)
  }

  checkForLength(control: FormControl){
  	if(control.value.length <= this.charsCount ){
  		return {
  			'lengthError': true
  		};
  	}
  	return null
  }

}
