import { Component, inject } from "@angular/core";
import { Cv } from "../model/cv.model";
import { ActivatedRoute, Router } from "@angular/router";
import { CvService } from "../services/cv.service";
import { APP_ROUTES } from "src/app/config/routes.config";
import { AuthService } from "src/app/auth/services/auth.service";
import { catchError, EMPTY, switchMap } from "rxjs";

@Component({
  selector: 'app-details-cv',
  templateUrl: './details-cv.component.html',
  styleUrls: ['./details-cv.component.css'],
})
export class DetailsCvComponent {
  cv: Cv | null = null;
  acr = inject(ActivatedRoute);
  cvService = inject(CvService);
  authService = inject(AuthService);
  router = inject(Router);
  cv$ = this.acr.params.pipe(
      switchMap((params) => this.cvService.getCvById(params['id'])),
      catchError((e) => {
        this.router.navigate([APP_ROUTES.cv]);
        return EMPTY;
      })
    );
  constructor() {
    // const id = this.acr.snapshot.params['id'];
    // this.cvService.getCvById(id).subscribe({
    //   next: (cv) => this.cv = cv,
    //   error: () => this.router.navigate([APP_ROUTES.cv])
    // })
  }

  deleteCv(cv: Cv) {
    this.cvService.deleteCvById(cv).subscribe({
      next: () => {
        this.router.navigate([APP_ROUTES.cv]);
      },
      error: (e) => {
        console.log(e);
      },
    });
  }
}
