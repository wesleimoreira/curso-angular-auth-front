//Angular
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';

// Aplicação
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private url: string = "http://localhost:3000";

  constructor(private httpClient: HttpClient, private router: Router) { }

  public sign(payload: { email: string, password: string }): Observable<any> {
    return this.httpClient.post<{ token: string }>(`${this.url}/sign`, payload).pipe(
      map((res) => {
        localStorage.removeItem('access_token');
        localStorage.setItem('access_token', res.token);
        return this.router.navigate(['admin']);
      }),
      catchError((err) => {
        if (err.error.message) return throwError(() => err.error.message);

        return throwError(() => "Serviço indisponível no momento, tente mais tarde!")
      })
    );
  }

  public logout() {
    localStorage.removeItem('access_token');
    return this.router.navigate(['']);
  }

  public isAuthenticated(): Boolean {
    const token = localStorage.getItem('access_token');

    if (!token) return false;

    return !new JwtHelperService().isTokenExpired(token);
  }
}
