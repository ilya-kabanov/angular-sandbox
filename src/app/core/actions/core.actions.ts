import { createAction, props } from '@ngrx/store';

export const setTokens = createAction(
  '[Core] Set Tokens',
  props<{ access: string; refresh: string }>()
);

export const resetTokens = createAction('[Core] Reset Tokens');

export const authRequired = createAction(
  '[Core] Auth Required',
  props<{ url: string }>()
);
