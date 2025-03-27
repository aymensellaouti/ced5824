import { AfterViewInit, Component, inject, ViewChild } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgForm, FormsModule } from '@angular/forms';
import { APP_ROUTES } from 'src/app/config/routes.config';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [FormsModule, NgIf],
})
export class LoginComponent implements AfterViewInit {
  authService = inject(AuthService);
  router = inject(Router);
  toastr = inject(ToastrService);
  @ViewChild('loginForm')
  loginForm!: NgForm;
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.loginForm.setValue({email: "aymen@gmail.com", password: "aymen"});
    })
  }

  login(loginForm: NgForm) {
    this.authService.login(loginForm.value).subscribe({
      next: (response) => {
        this.router.navigate([APP_ROUTES.cv]);
      },
      error: (e) => {
        this.toastr.error(`Veuillez vérifier vos credentials`);
      },
    });
  }
}
