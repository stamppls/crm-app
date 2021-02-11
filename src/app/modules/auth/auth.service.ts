import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private jwtHelper: JwtHelperService = new JwtHelperService();
  private mockupToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmYwNmY2ZDNiOWM4MTVmZmJjNjY2ZDciLCJmaXJzdE5hbWUiOiJUaGVlcmFzYWsiLCJsYXN0TmFtZSI6IlR1YnJpdCIsImVtYWlsIjoidGhlZXJhc2FrLnR1YnJpdEBnbWFpbC5jb20iLCJjb21wYW55Q29kZSI6IlBZVDEiLCJyb2xlcyI6ImFkbWluIiwiaWF0IjoxNjA5NTk2MTEzLCJleHAiOjE2MTY3OTYxMTN9.Ce0KxgXb86wUYIk1Xna4BCl2Z5oT4Ym2ru83Iy-SfhQ';

  private authStateChanged$ = new BehaviorSubject<boolean>(false);
  public authStateObservable$ = this.authStateChanged$.asObservable();

  private authUserStateChanged$ = new BehaviorSubject<any>(null);
  public authUserStateObservable$ = this.authUserStateChanged$.asObservable();

  constructor(private httpClient: HttpClient, private router: Router) {
    this.authStateChanged$.next(this.isAuthenticated());
    // for dev only
    // this.login();
  }

  public register(): void {

    localStorage.setItem('token', this.mockupToken);
    this.authStateChanged$.next(this.isAuthenticated());
  }

  public login(payLoad): void {

    localStorage.setItem('token', this.mockupToken);
    this.authStateChanged$.next(this.isAuthenticated());
    this.router.navigate(['']);


    // this.httpClient.post(`${environment.apiUrl}api/auth/signin`, payLoad).subscribe((data: any) => {
    //   localStorage.setItem('token', data.token);
    //   this.authStateChanged$.next(this.isAuthenticated());
    //   this.router.navigate(['']);
    // })
  }

  public logout(): void {
    localStorage.removeItem('token');
    this.authStateChanged$.next(this.isAuthenticated());
    this.router.navigate(['auth/login']);
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');

    // Get User information
    this.authUserStateChanged$.next(this.jwtHelper.decodeToken(token));
    // Check whether the token is expired and return
    // true or false

    return !this.jwtHelper.isTokenExpired(token);

  }

  public token(): string {
    const token = localStorage.getItem('token');
    return token;
  }


}
