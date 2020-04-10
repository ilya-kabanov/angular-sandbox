import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { concatMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

import * as CoreActions from '../actions/core.actions';

@Injectable()
export class CoreEffects {
  setTokens$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CoreActions.setTokens),
      /** An EMPTY observable only emits completion. Replace with your own observable API request */
      concatMap(() => EMPTY)
    );
  });

  resetTokens$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CoreActions.resetTokens),
      // todo: delete tokens from storage
      concatMap(() => EMPTY)
    );
  });

  constructor(private actions$: Actions) {}
}
