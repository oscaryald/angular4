import { 
Directive,
 ElementRef,
  OnInit,
   Renderer2,
    HostBinding,
     HostListener,
      Input } from '@angular/core';

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

  /*** second example for cars ***/
  @HostBinding('style.background') background:string = "#eee";

  @HostListener('mouseenter') mouseEnter(){
  	this.background = 'green'
  }

  @HostListener('mouseleave') mouseLeave(){
  	this.background = 'transparent';
  }

  /*** third example for users ***/
  @Input() hoverColor: string;
  @Input() defaultColor: string;
  
  @HostListener('mouseenter') mouseEnter2(){
    this.background = this.hoverColor !== undefined ? this.hoverColor : 'green'
  }

  @HostListener('mouseleave') mouseLeave2(){
    this.background = this.defaultColor
  }
  	
}
