import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cv } from '../model/cv.model';
import { CvItemComponent } from '../cv-item/cv-item.component';
import { NgFor, NgClass } from '@angular/common';

@Component({
    selector: 'app-listcvs',
    templateUrl: './listcvs.component.html',
    styleUrls: ['./listcvs.component.css'],
    standalone: true,
    imports: [NgFor, NgClass, CvItemComponent]
})
export class ListcvsComponent {
  @Input() cvs: Cv[] = [];
  @Output() forwardCv = new EventEmitter<Cv>();

  track(index: number, cv: Cv): number {
    return cv.id;
  }
}
