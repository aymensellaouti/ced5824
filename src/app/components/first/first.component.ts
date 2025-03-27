import { Component } from '@angular/core';
import { SecondComponent } from '../second/second.component';

@Component({
    selector: 'app-first',
    templateUrl: './first.component.html',
    styleUrls: ['./first.component.css'],
    standalone: true,
    imports: [SecondComponent]
})
export class FirstComponent {

}
