import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, Subject, tap } from 'rxjs';
import { LoginResonse } from '../dto/login-response.dto';
import { Credentials } from '../dto/credentials.dto';
import { HttpClient } from '@angular/common/http';
import { APP_API } from 'src/app/config/api.config';
import { APP_CONSTS } from 'src/app/config/constantes.config';


export interface ConnectedUser {
  id: number;
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  http = inject(HttpClient);
  #connectedUser$: BehaviorSubject<ConnectedUser | null> = new BehaviorSubject(
    this.getConnectedUser()
  );
  connectedUser$ = this.#connectedUser$.asObservable();
  isLoggedIn$: Observable<boolean> = this.connectedUser$.pipe(
    map((user) => !!user)
  );
  isLoggedOut$: Observable<boolean> = this.connectedUser$.pipe(
    map((user) => !user)
  );

  login(credentials: Credentials): Observable<LoginResonse> {
    // Todo: Appeler l'api avec les credentials et retourner un observable
    return this.http.post<LoginResonse>(APP_API.login, credentials).pipe(
      tap((response) => {
        this.saveData(response, credentials);
        this.#connectedUser$.next({
          id: response.userId,
          email: credentials.email,
        });
      })
    );
  }

  logout() {
    this.clearStorage();
    this.#connectedUser$.next(null);
  }
  clearStorage() {
    this.clearToken();
    localStorage.removeItem(APP_CONSTS.connectedUser);
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

  getConnectedUser(): ConnectedUser | null {
    const user = localStorage.getItem(APP_CONSTS.connectedUser);
    return user ? JSON.parse(user) : null;
  }

  saveData(response: LoginResonse, credentials: Credentials): void {
    this.saveToken(response.id);
    this.saveUser(credentials.email, response.userId);
  }
  saveUser(email: string, id: number) {
    localStorage.setItem(
      APP_CONSTS.connectedUser,
      JSON.stringify({ id, email })
    );
  }
}
