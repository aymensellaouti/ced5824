import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: 'input[type=text][appRainbow]'
})
export class RainbowDirective {

  @HostBinding('style.color') color = 'black';
  @HostBinding('style.borderColor') bc = 'black';
  constructor() {
    console.log('Rainbow');
  }
  @HostListener('keyup') onKeyUp() {
    this.color = this.bc = this.getRandomColor();
  }

  private getRandomColor(): string {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }
}
