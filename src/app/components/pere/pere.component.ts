import { Component } from '@angular/core';
import { FilsComponent } from '../fils/fils.component';
import { IsEvenComponent } from '../is-even/is-even.component';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-pere',
    templateUrl: './pere.component.html',
    styleUrls: ['./pere.component.css'],
    standalone: true,
    imports: [
        FormsModule,
        IsEvenComponent,
        FilsComponent,
    ],
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
