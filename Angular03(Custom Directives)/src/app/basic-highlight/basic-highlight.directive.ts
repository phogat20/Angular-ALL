import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]',
})
export class BasicHighlightDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}

  // Element reference (or "element ref" for short) is a way to access a particular element in the template of a component.
  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = 'green';
  }
}
