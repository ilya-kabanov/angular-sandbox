import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LoginResponse } from '../models/auth';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>('/auth/login', {
      email: email,
      password: password,
    });
  }
}
