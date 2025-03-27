import { Component, inject } from '@angular/core';
import { Cv } from '../model/cv.model';
import { EmbaucheService } from '../services/embauche.service';
import { CvItemComponent } from '../cv-item/cv-item.component';
import { NgIf, NgFor } from '@angular/common';


@Component({
    selector: 'app-embauche',
    templateUrl: './embauche.component.html',
    styleUrls: ['./embauche.component.css'],
    standalone: true,
    imports: [
        NgIf,
        NgFor,
        CvItemComponent,
    ],
})
export class EmbaucheComponent {
  embaucheService = inject( EmbaucheService );
  public embauchees: Cv[] = this.embaucheService.getEmbauchees();



}
