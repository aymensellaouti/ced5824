import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { CvService } from '../services/cv.service';
import { catchError, of, retry } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Cv } from '../model/cv.model';

export const cvsResolver: ResolveFn<Cv[]> = (route, state) => {
  const cvService = inject(CvService);
  const toastr = inject(ToastrService);
  return cvService.getCvs().pipe(
    retry({
      count: 2,
      delay: 3000
    }),
    catchError((e) => {
      toastr.error('Les donnees sont fictives merci de contacter l admin');
      return of(cvService.getFakeCvs());
    })
  );
};
