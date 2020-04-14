import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, Effect } from '@ngrx/effects';

import { concatMap, mergeMap, tap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

import * as CoreActions from '../actions/core.actions';
import { Router } from '@angular/router';

@Injectable()
export class CoreEffects {
  setTokens$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(CoreActions.setTokens),
        // todo: save to local sttorage
        tap((res) => {})
      );
    },
    { dispatch: false }
  );

  resetTokens$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(CoreActions.resetTokens),
        tap((res) => {
          // todo: delete tokens from storage
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
