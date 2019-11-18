import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('rgb(21, 36, 68)', 'white');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null, null);
  }

  // @HostListener('keydown') onKeyDown() {
  //   console.log('downn')
  //   this.highlight('rgb(21, 36, 68)', 'white')
  // }

  private highlight(backgroundColor: string, color: string) {
    this.el.nativeElement.style.backgroundColor = backgroundColor;
    this.el.nativeElement.style.color = color;
  }
}