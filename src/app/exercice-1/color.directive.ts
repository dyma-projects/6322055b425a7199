import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive ({ selector: 'p'})

export class ColorDirective {

  constructor(private el: ElementRef) {
    console.log(el);
    
  }

  @HostListener('window:keyup', ['$event']) keyEvent(event: KeyboardEvent) {
    console.log(event);

    if(event.key === 'ArrowRight') {
      this.el.nativeElement.style.color = 'red';
      this.el.nativeElement.style.backgroundColor = '';
    }

    else if(event.key === 'ArrowUp') {
      this.el.nativeElement.style.color = 'blue';
      this.el.nativeElement.style.backgroundColor = '';
    }

    else if(event.key === 'ArrowDown') {
      this.el.nativeElement.style.color = 'yellow';
      this.el.nativeElement.style.backgroundColor = 'grey';
    }

    else if(event.key === 'ArrowLeft') {
      this.el.nativeElement.style.color = 'green';
      this.el.nativeElement.style.backgroundColor = '';
    } 
    
    else {
      this.el.nativeElement.style.color = 'black';
      this.el.nativeElement.style.backgroundColor = '';
    }
  }
}