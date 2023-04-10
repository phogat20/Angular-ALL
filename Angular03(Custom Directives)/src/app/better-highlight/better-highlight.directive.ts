import {
  Directive,
  Renderer2,
  OnInit,
  ElementRef,
  HostListener,
  HostBinding,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]',
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
   @Input('appBetterHighlight') highlightColor: string = 'blue';
  @HostBinding('style.backgroundColor')
  backgroundColor: string = 'transparent';
  // @HostBinding is a decorator in Angular that allows you to set values for properties of the host element of a directive or component. It provides a way to dynamically bind a property of the host element to a variable or expression in your code.


  // Renderer:-- is a service provided by the platform that provides a way to manipulate the DOM elements in a safe and efficient way. 
  // The renderer service provides methods for creating, updating, and deleting DOM elements, as well as manipulating element properties and attributes.
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
    //using RENDERER Class
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }
  // HostListener - It can be used to listen to events such as click, mouseenter, mouseleave, keydown, and many more. 
  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.defaultColor;
  }
}
