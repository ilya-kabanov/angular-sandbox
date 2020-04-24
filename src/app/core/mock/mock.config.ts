import { HttpResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { LoginResponse } from '../models/auth';

export default {
  POST: {
    '/auth/login': {
      handler: authLogin,
    },
  },
};

function authLogin() {
  return of(
    new HttpResponse({
      status: 200,
      body: <LoginResponse>{ accessToken: 'access0', refreshToken: 'refresh0' },
    })
  );
}
