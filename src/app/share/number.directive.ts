import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[numberOnly]'
})
export class NumberDirective {

  constructor() { }

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    const e: any = <KeyboardEvent>event;
    // Allow:  arrow
    if ([8, 13, 37, 38, 39, 40].indexOf(e.keyCode) !== -1 ||
      // Allow: Ctrl+A
      (e.keyCode == 65 && (e.ctrlKey === true || e.metaKey === true)) ||
      // Allow: Ctrl+C
      (e.keyCode == 67 && (e.ctrlKey === true || e.metaKey === true)) ||
      // Allow: Ctrl+V
      (e.keyCode == 86 && (e.ctrlKey === true || e.metaKey === true)) ||
      // Allow: Ctrl+X
      (e.keyCode == 88 && (e.ctrlKey === true || e.metaKey === true)) ||
      // Allow: 0-9 numpad
      (e.keyCode >= 96 && e.keyCode <= 105) ||
      // Allow: 0-9
      (e.keyCode >= 48 && e.keyCode <= 57)) {
        // พิมพ์ได้
        return;
    } else {
      // ไม่ให้พิมพ์
      e.preventDefault();
    }
  }
}