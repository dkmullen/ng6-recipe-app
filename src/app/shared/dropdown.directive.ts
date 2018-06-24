import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }

  constructor() { }

}

// This is a custom directive built with ng g d ...
// @HostBinding is attached to the css class 'open' that we want to manipulate
// @HostListener is bound to a click, and set to toggle