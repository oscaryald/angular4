import { Directive, ElementRef, OnInit, Renderer2, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appExample1]'
})

export class Example1Directive {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  /*** first example ***/
  ngOnInit(){
  	const { nativeElement } = this.element;
  	this.renderer.setStyle(nativeElement, 'background-color', '#eee')
  }

  /*** second example ***/
  @HostBinding('style.background') background:string = "#eee";

  @HostListener('mouseenter') mouseEnter(){
  	this.background = 'green'
  }

  @HostListener('mouseleave') mouseLeave(){
  	this.background = 'transparent';
  }
  	
}
