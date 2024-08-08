import { Component, inject } from "@angular/core";
import { Cv } from "../model/cv.model";
import { ActivatedRoute, Router } from "@angular/router";
import { CvService } from "../services/cv.service";
import { APP_ROUTES } from "src/app/config/routes.config";

@Component({
  selector: 'app-details-cv',
  templateUrl: './details-cv.component.html',
  styleUrls: ['./details-cv.component.css'],
})
export class DetailsCvComponent {
  cv: Cv | null = null;
  acr = inject(ActivatedRoute);
  cvService = inject(CvService);
  router = inject(Router);
  constructor() {
    const id = this.acr.snapshot.params['id'];
    this.cvService.getCvById(id).subscribe({
      next: (cv) => this.cv = cv,
      error: () => this.router.navigate([APP_ROUTES.cv])
    })
  }

  deleteCv() {
    if (this.cv) {
      this.cvService.deleteCvById(this.cv).subscribe({
        next: () => {
            this.router.navigate([APP_ROUTES.cv]);
        },
        error: (e) => {console.log(e)}
      })
    }
  }
}
