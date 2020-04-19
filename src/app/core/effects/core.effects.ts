import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Action } from '@ngrx/store';
import { Actions, createEffect, ofType, Effect } from '@ngrx/effects';

import { EMPTY, defer, of, Observable, asyncScheduler } from 'rxjs';
import { tap } from 'rxjs/operators';

import * as CoreActions from '../actions/core.actions';

@Injectable()
export class CoreEffects {
  readonly accessTokenKey: string = 'access-token';
  readonly refreshTokenKey: string = 'refresh-token';

  @Effect()
  init$ = defer(
    (): Observable<Action> => {
      let accessToken = localStorage.getItem(this.accessTokenKey);
      let refreshToken = localStorage.getItem(this.refreshTokenKey);

      // todo: add more checks
      if (accessToken && refreshToken) {
        return of(
          CoreActions.setTokens({
            access: accessToken,
            refresh: refreshToken,
          }),
          asyncScheduler
        );
      } else {
        return of(CoreActions.resetTokens(), asyncScheduler);
      }
    }
  );

  setTokens$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(CoreActions.setTokens),
        tap((res) => {
          localStorage.setItem(this.accessTokenKey, res.access);
          localStorage.setItem(this.refreshTokenKey, res.refresh);
        })
      );
    },
    { dispatch: false }
  );

  resetTokens$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(CoreActions.resetTokens),
        tap(() => {
          localStorage.removeItem(this.accessTokenKey);
          localStorage.removeItem(this.refreshTokenKey);
          this.router.navigate(['/auth/login']);
        })
      );
    },
    { dispatch: false }
  );

  authRequired$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(CoreActions.authRequired),
        tap(() => {
          this.router.navigate(['/auth/login']);
        })
      );
    },
    { dispatch: false }
  );

  constructor(private actions$: Actions, private router: Router) {}
}
