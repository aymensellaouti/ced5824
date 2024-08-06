import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-is-even',
  templateUrl: './is-even.component.html',
  styleUrls: ['./is-even.component.css'],
})
export class IsEvenComponent {
  isEven = true;
  _element = 0;
  @Input({ required: true })
  set element(value: number) {
    console.log(value);

    this._element = value;
    this.isEven = this._element % 2 === 0;
  };
}
