import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import { EMPTY, of, from } from 'rxjs';

import * as AuthActions from '../actions/auth.actions';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';
import * as CoreActions from '../../core/actions/core.actions';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.login),
      mergeMap((props) =>
        this.authService.login(props.email, props.password).pipe(
          map((res) =>
            AuthActions.loginSuccess({
              accessToken: res.accessToken,
              refreshToken: res.refreshToken,
            })
          ),
          catchError((error) => of(AuthActions.loginFailure({ error: error })))
        )
      )
    );
  });

  loginSuccess$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.loginSuccess),
      map((props) =>
        CoreActions.setTokens({
          access: props.accessToken,
          refresh: props.refreshToken,
        })
      ),
      tap(() => {
        this.router.navigate(['']);
      })
    );
  });

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}
}
