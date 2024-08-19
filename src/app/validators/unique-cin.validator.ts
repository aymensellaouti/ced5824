import { AbstractControl, AsyncValidatorFn, ValidatorFn } from "@angular/forms";
import { CvService } from "../cv/services/cv.service";
import { map } from "rxjs";

export const uniqueCinValidator = (cvService: CvService): AsyncValidatorFn => {
  return (control: AbstractControl) => {
    const cin = control.value;
    return cvService.getCvsByProperty('cin', cin).pipe(
      map( cvs => cvs.length ? { uniqueCv : 'Le cv existe déjà'} : null)
    )
  }
}
