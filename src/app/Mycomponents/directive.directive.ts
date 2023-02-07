import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appDirective]'
})
export class DirectiveDirective {

  constructor(el:ElementRef) { 
    el.nativeElement.style.color="yellow"
  }

}
