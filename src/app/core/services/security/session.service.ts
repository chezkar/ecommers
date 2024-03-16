import { Injectable } from '@angular/core';
import { loginResponse } from '../../types/auth';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private currentUserSubject!: BehaviorSubject<loginResponse | any>;
  public currentUser!: Observable<loginResponse>;

  constructor() {
    this.init();
  }

  async init() {
    this.currentUserSubject = new BehaviorSubject<loginResponse>(
      JSON.parse(String(localStorage.getItem('user')))
    );

    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValueObservable(): Observable<loginResponse> {
    return this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): loginResponse {
    return this.currentUserSubject.value;
  }

  public async setCurrentUserValue(model: loginResponse) {
    localStorage.setItem(JSON.stringify(model), 'user')

    this.currentUserSubject.next(model);
  }

  public async logout() {
    await localStorage.removeItem('user');
    this.currentUserSubject.next(null);
  }
}
