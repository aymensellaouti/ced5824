import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DefaultImagePipe } from '../pipes/default-image.pipe';
import { AddCvComponent } from './add-cv/add-cv.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { CvCardComponent } from './cv-card/cv-card.component';
import { CvItemComponent } from './cv-item/cv-item.component';
import { CvRoutingModule } from './cv-routing.module';
import { CvComponent } from './cv/cv.component';
import { DetailsCvComponent } from './details-cv/details-cv.component';
import { EmbaucheComponent } from './embauche/embauche.component';
import { ListcvsComponent } from './listcvs/listcvs.component';
import { MasterDetailCvComponent } from './master-detail-cv/master-detail-cv.component';


@NgModule({
  declarations: [
    // Cv
    CvComponent,
    ListcvsComponent,
    CvItemComponent,
    CvCardComponent,
    EmbaucheComponent,
    AddCvComponent,
    AutocompleteComponent,
    MasterDetailCvComponent,
    DetailsCvComponent,
    DefaultImagePipe,
  ],
  imports: [CommonModule, CvRoutingModule, ReactiveFormsModule],
})
export default class CvModule {}
