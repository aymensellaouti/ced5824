import { Component, Input } from '@angular/core';
import { Cv } from '../model/cv.model';
import { APP_CONSTS } from 'src/app/config/constantes.config';

@Component({
  selector: 'app-cv-card',
  templateUrl: './cv-card.component.html',
  styleUrls: ['./cv-card.component.css'],
})
export class CvCardComponent {
  @Input() cv: Cv | null = null;

}
