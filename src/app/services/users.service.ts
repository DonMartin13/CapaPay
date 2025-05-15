import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private baseUrl = environment.baseUrl;
  private userUrl = `${this.baseUrl}/User`;
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {}

  
  getAllUsers(params: any = {}): Observable<any> {
    return this.http.get<any>(this.userUrl, { params, headers: this.headers }).pipe(
      tap(response => console.log('✅ Fetched users:', response)),
      catchError(this.handleError('getAllUsers'))
    );
  }

  
  getUserById(id: string): Observable<any> {
    return this.http.get<any>(`${this.userUrl}/${id}`, { headers: this.headers }).pipe(
      tap(response => console.log('✅ Fetched user by ID:', response)),
      catchError(this.handleError('getUserById'))
    );
  }

  
  getUserByUserNumber(userNumber: string): Observable<any> {
    return this.http.get<any>(`${this.userUrl}/usernumber/${encodeURIComponent(userNumber)}`, { headers: this.headers }).pipe(
      tap(response => console.log('✅ Fetched user by UserNumber:', response)),
      catchError(this.handleError('getUserByUserNumber'))
    );
  }

  
  getUsersByCompanyId(companyId: string): Observable<any> {
    return this.http.get<any>(`${this.userUrl}/company/${companyId}`, { headers: this.headers }).pipe(
      tap(response => console.log('✅ Fetched users by Company ID:', response)),
      catchError(this.handleError('getUsersByCompanyId'))
    );
  }

 
  createUser(userData: any): Observable<any> {
    return this.http.post<any>(this.userUrl, userData, { headers: this.headers }).pipe(
      tap(response => console.log('✅ User created:', response)),
      catchError(this.handleError('createUser'))
    );
  }

  
  updateUser(id: string, updatedUserData: any): Observable<any> {
    return this.http.put<any>(`${this.userUrl}/${id}`, updatedUserData, { headers: this.headers }).pipe(
      tap(response => console.log('✅ User updated:', response)),
      catchError(this.handleError('updateUser'))
    );
  }

  
  deleteUser(id: string): Observable<any> {
    return this.http.delete<any>(`${this.userUrl}/${id}`, { headers: this.headers }).pipe(
      tap(response => console.log('✅ User deleted:', response)),
      catchError(this.handleError('deleteUser'))
    );
  }

  
  private handleError(operation: string) {
    return (error: any): Observable<never> => {
      console.error(`❌ ${operation} failed:`, error);
      return throwError(() => error);
    };
  }
}
