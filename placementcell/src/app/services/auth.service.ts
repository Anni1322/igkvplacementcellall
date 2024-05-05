import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/student';  

  constructor(private http: HttpClient) {}

  login(credentials: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, credentials).pipe(
      map(response => {
        // Store user details and token in local storage or cookie
        localStorage.setItem('currentUser', JSON.stringify(response));
        return response;
      }),
      catchError(error => {
        // Handle login errors (e.g., display error message)
        console.error('Login error:', error);
        return of(null);
      })
    );
  }

  logout(): void {
    // Remove user from local storage or cookie
    localStorage.removeItem('currentUser');
    
  }

  // Implement other authentication-related methods such as registration, logout, etc.
}
