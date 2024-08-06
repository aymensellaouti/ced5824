import { Component } from '@angular/core';

@Component({
  selector: 'app-pere',
  templateUrl: './pere.component.html',
  styleUrls: ['./pere.component.css'],
})
export class PereComponent {
  age = 0;
  constructor() {
    console.log('je suis le pere');
  }
  processMessage(message: string) {
    alert(message)
  }
}
