import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LoginResponse } from '../models/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  login(email: string, password: string): Observable<LoginResponse> {
    return of(new LoginResponse());
  }
}
