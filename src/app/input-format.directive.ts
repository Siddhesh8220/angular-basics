import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]',
})
export class InputFormatDirective {
  @Input('format') format: any;
  // @Input('appInputFormat') format: any;
  //change html as [appInputFormat]="'uppercase'"

  constructor(private el: ElementRef) {}

  // @HostListener('focus') onFocus() {
  //   console.log('OnFocus');
  // }

  //blur and focus are events
  @HostListener('blur') onBlur() {
    console.log('OnBlur');
    let value: string = this.el.nativeElement.value;
    if (this.format == 'lowercase')
      this.el.nativeElement.value = value.toLowerCase();
    else this.el.nativeElement.value = value.toUpperCase();
  }
}
