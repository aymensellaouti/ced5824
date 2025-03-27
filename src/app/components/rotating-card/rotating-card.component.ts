import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-rotating-card',
    templateUrl: './rotating-card.component.html',
    styleUrls: ['./rotating-card.component.css'],
    standalone: true,
    imports: [FormsModule],
})
export class RotatingCardComponent {
  name = 'sellaouti';
  firstname = 'aymen';
  job = 'teacher';
  path = 'rotating_card_profile2.png';
}
