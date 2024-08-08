import { inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { LoginResonse } from '../dto/login-response.dto';
import { Credentials } from '../dto/credentials.dto';
import { HttpClient } from '@angular/common/http';
import { APP_API } from 'src/app/config/api.config';
import { APP_CONSTS } from 'src/app/config/constantes.config';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  http = inject(HttpClient);
  login(credentials: Credentials): Observable<LoginResonse> {
    // Todo: Appeler l'api avec les credentials et retourner un observable
    return this.http.post<LoginResonse>(APP_API.login, credentials).pipe(
      tap((response) => this.saveToken(response.id))
    );
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  getToken(): string {
    return localStorage.getItem(APP_CONSTS.tokenKey) ?? '';
  }

  clearToken(): void {
    localStorage.removeItem(APP_CONSTS.tokenKey);
  }

  saveToken(tokenValue: string): void {
    localStorage.setItem(APP_CONSTS.tokenKey, tokenValue);
  }

  logout() {
    this.clearToken();
  }

}
