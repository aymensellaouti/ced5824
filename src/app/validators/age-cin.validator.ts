import { AbstractControl, ValidatorFn } from "@angular/forms";


export const ageCinValidator = (): ValidatorFn => {
  return (control: AbstractControl) => {
    const cin = +control.get('cin')?.value.substring(0,2);
    const age = +control.get('age')?.value;
    console.log({ cin, age });

    if(age > 60 && cin <=19 || age < 60 && cin > 19) {
      return null;
    }
    return {ageCin: "L'age ne correspond pas au cin saisie"}
  }
}
