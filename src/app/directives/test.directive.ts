import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appTest]'
})
export class TestDirective {

  constructor(private el:ElementRef) { }


  @HostListener("mouseleave") onMouseEnter()
  {    
    this.el.nativeElement.style.color="red";
  }



}
