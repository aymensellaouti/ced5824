import {  inject, Injectable } from '@angular/core';
import { Cv } from '../model/cv.model';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { APP_API } from 'src/app/config/api.config';


@Injectable({
  providedIn: 'root',
})
export class CvService {
  #cvs = [
    new Cv(1, 'sellaouti', 'aymen', 'trainer', '123', 42, ''),
    new Cv(2, 'Dali', 'sourour', 'Dev', '1234', 20, '     '),
  ];

  #selectCvSuject$ = new Subject<Cv>();

  selectCv$ = this.#selectCvSuject$.asObservable();
  http = inject(HttpClient);
  /**
   * Retourne la liste des cvs
   * @returns Cv[]
   */
  getCvs(): Observable<Cv[]> {
    return this.http.get<Cv[]>(APP_API.cv);
  }

  /**
   * Retourne le cv ajouté
   * @param cv: Cv
   * @returns Cv
   */
  addCv(cv: Partial<Cv>): Observable<Cv> {
    return this.http.post<Cv>(APP_API.cv, cv);
  }

  /**
   *
   * Cherche un cv avec son id
   *
   * @param id
   * @returns Observable<Cv>
   * @throws Exception 404
   */
  getCvById(id: number): Observable<Cv> {
    return this.http.get<Cv>(APP_API.cv + id);
  }

  getCvsByName(name: string): Observable<Cv[]> {
    const params = new HttpParams().set(
      'filter',
      `{"where":{"name":{"like":"%${name}%"}}}`
    );
    return this.http.get<Cv[]>(APP_API.cv, { params });
  }
  getCvsByProperty(property: string, value: string): Observable<Cv[]> {
    const params = new HttpParams().set(
      'filter',
      `{"where":{"${property}":"${value}"}}`
    );
    return this.http.get<Cv[]>(APP_API.cv, { params });
  }

  /**
   *
   * Supprime un cv s'il le trouve
   *
   * @param cv : Cv
   * @returns boolean
   */
  deleteCvById(cv: Cv): Observable<{ count: number }> {
    return this.http.delete<{ count: number }>(APP_API.cv + cv.id);
  }

  /**
   * Retourne la liste des cvs
   * @returns Cv[]
   */
  getFakeCvs(): Cv[] {
    return this.#cvs;
  }

  /**
   *
   * Cherche un cv avec son id dans lai liste fictive de cvs
   *
   * @param id
   * @returns Cv | null
   */
  findCvById(id: number): Cv | null {
    return this.#cvs.find((cv) => cv.id === +id) ?? null;
  }

  /**
   *
   * Supprime un cv s'il le trouve
   *
   * @param cv : Cv
   * @returns boolean
   */
  deleteCv(cv: Cv): boolean {
    const index = this.#cvs.indexOf(cv);
    if (index > -1) {
      this.#cvs.splice(index, 1);
      return true;
    }
    return false;
  }

  selectCv(cv: Cv) {
    this.#selectCvSuject$.next(cv);
  }
}
