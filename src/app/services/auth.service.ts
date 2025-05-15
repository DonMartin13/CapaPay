import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = environment.baseUrl;
  private authUrl = `${this.baseUrl}/Auth`;
  private currentUserSubject = new BehaviorSubject<any>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  constructor(private http: HttpClient) {}

  
  setUser(user: any) {
    this.currentUserSubject.next(user);
  }

  
  getUser(): any {
    return this.currentUserSubject.value;
  }

  login(credentials: { email: string; password: string }): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post(`${this.authUrl}/login`, credentials, { headers }).pipe(
      tap(response => {
        console.log('✅ Login success:', response);
        this.setUser(response);
      }),
      catchError(error => {
        console.error('Login error:', error);
        console.error('Error Details:', {
          status: error.status,
          message: error.message,
          error: error.error
        });
        return throwError(() => error);
      })      
    );
  }

  register(userData: any
  ): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post(`${this.authUrl}/register`, userData, { headers }).pipe(
      tap(response => {
        console.log('✅ Register success:', response);
      }),
      catchError(error => {
        console.error('Register error:', error);
        return throwError(() => error);
      })
    );
  }
}
