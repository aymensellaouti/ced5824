import { Component, inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { APP_ROUTES } from 'src/app/config/routes.config';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  authService = inject(AuthService);
  router = inject(Router);
  toastr = inject(ToastrService);
  login(loginForm: NgForm) {
    this.authService.login(loginForm.value).subscribe({
      next: (response) => {
        localStorage.setItem('token', response.id);
        this.router.navigate([APP_ROUTES.cv]);
      },
      error: (e) => {
        this.toastr.error(`Veuillez vérifier vos credentials`)
      }
    })
  }
}
