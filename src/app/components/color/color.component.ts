import { Component } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent {
  defaultColor = 'red';
  color = this.defaultColor;


  /**
   * It changes the color state attribute
   *
   * @param newColor
   * @returns void
   */
  changeColor(newColor: string): void {
    this.color = newColor;
  }

  reset() {
    this.color = this.defaultColor;
  }
}
