import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from './localstorage.service';
import { tap, catchError } from 'rxjs/operators';

export interface IAuthService {
  login(username: string, password: string): Observable<boolean>;
  logout(): void;
}

@Injectable()
export class AuthService implements IAuthService {
  public baseUrl = '/api/v1/auth';

  private currentUser = new BehaviorSubject<string>(undefined);
  public currentUser$ = this.currentUser.asObservable();

  constructor(private http: HttpClient, private localStorage: LocalStorageService) {}

  public login(username: string, password: string): Observable<boolean> {
    return this.http.post<boolean>(`${this.baseUrl}`, { username: username, password: password }).pipe(
      tap(res => {
        if (res) {
          this.localStorage.setItem('authInfo', username);
          this.currentUser.next(username);
        }
      }),
      catchError((error: Response) => {
        return throwError(error);
      })
    );
  }

  public logout() {
    this.currentUser.next(undefined);
    this.localStorage.removeItem('authInfo');
  }
}
