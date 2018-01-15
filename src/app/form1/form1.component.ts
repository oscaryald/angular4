import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['../../../node_modules/bootstrap/dist/css/bootstrap.min.css','./form1.component.css']
})
export class Form1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

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

  defaultAnswer = "no";
  defaultCountry = "ua";

  formData = {};
  isSubmited = false

  @ViewChild('form') form: NgForm;

  addRandEmail(){
  	const randEmail = "wtf@gmail.com";

  	this.form.form.patchValue({
  		user:{
  			email:randEmail
  		}
  	})
  }

  submitForm(form: NgForm){
  	console.log('Submited!', this.form)
  	this.isSubmited = true;
  	this.formData = this.form.value
  }

}
