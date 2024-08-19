import { Component, inject } from '@angular/core';
import { Validators, AbstractControlOptions, FormBuilder, AbstractControl } from '@angular/forms';
import { CvService } from '../services/cv.service';
import { Cv } from '../model/cv.model';
import { catchError, EMPTY, filter, tap } from 'rxjs';
import { Router } from '@angular/router';
import { APP_ROUTES } from 'src/app/config/routes.config';
import { ToastrService } from 'ngx-toastr';
import { APP_CONSTS } from 'src/app/config/constantes.config';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { uniqueCinValidator } from 'src/app/validators/unique-cin.validator';
import { ageCinValidator } from 'src/app/validators/age-cin.validator';
@Component({
  selector: 'app-add-cv',
  templateUrl: './add-cv.component.html',
  styleUrls: ['./add-cv.component.css'],
})
export class AddCvComponent {
  formBuilder = inject(FormBuilder);
  cvService = inject(CvService);
  router = inject(Router);
  toastr = inject(ToastrService);
  form = this.formBuilder.group(
    {
      name: ['', Validators.required],
      firstname: ['', Validators.required],
      path: [''],
      job: ['', Validators.required],
      cin: [
        '',
        {
          validators: [Validators.required, Validators.pattern('[0-9]{8}')],
          asyncValidators: [uniqueCinValidator(this.cvService)],
        },
      ],
      age: [
        0,
        {
          validators: [Validators.required],
          updateOn: 'blur',
        },
      ],
    },
    {
      validators: [ageCinValidator()],
      asyncValidators: [],
      updateOn: 'change',
    }
  );
  constructor() {
    const savedForm = localStorage.getItem(APP_CONSTS.addForm);
    if (savedForm) {
      this.form.setValue(JSON.parse(savedForm));
    }

    this.age?.valueChanges
      .pipe(
        tap((age) => (age < 18 ? this.path?.disable() : this.path?.enable())),
        takeUntilDestroyed()
      )
      .subscribe();

    this.form.statusChanges
      .pipe(
        filter((_) => this.form.valid),
        tap((_) =>
          localStorage.setItem(
            APP_CONSTS.addForm,
            JSON.stringify(this.form.value)
          )
        ),
        takeUntilDestroyed()
      )
      .subscribe();
  }
  addCv() {
    // this.cvService.addCv(this.form.value as Cv).subscribe({
    //   next: (cv) => {
    //     this.router.navigate([APP_ROUTES.cv]);
    //     this.toastr.success(`Le cv ${cv.firstname} ${cv.name}`);
    //   },
    //   error: (err) => {
    //     this.toastr.error(`Une erreur s'est produite, Veuillez contacter l'admin`);
    //   },
    // });
    this.cvService
      .addCv(this.form.value as Cv)
      .pipe(
        tap((cv) => {
          localStorage.removeItem(APP_CONSTS.addForm);
          this.router.navigate([APP_ROUTES.cv]);
          this.toastr.success(`Le cv ${cv.firstname} ${cv.name}`);
        }),
        catchError((e) => {
          this.toastr.error(
            `Une erreur s'est produite, Veuillez contacter l'admin`
          );
          return EMPTY;
        })
      )
      .subscribe();
  }

  get name(): AbstractControl {
    return this.form.get('name')!;
  }
  get firstname() {
    return this.form.get('firstname');
  }
  get age(): AbstractControl {
    return this.form.get('age')!;
  }
  get job() {
    return this.form.get('job');
  }
  get path() {
    return this.form.get('path');
  }
  get cin(): AbstractControl {
    return this.form.get('cin')!;
  }
}
