import { Action, createReducer, on } from '@ngrx/store';
import * as CoreActions from '../actions/core.actions';

export const coreFeatureKey = 'core';

export interface State {
  isAuthenticated: boolean;
  accessToken: string;
  refreshToken: string;
}

export const initialState: State = {
  isAuthenticated: false,
  accessToken: null,
  refreshToken: null,
};

const coreReducer = createReducer(
  initialState,
  on(CoreActions.setTokens, (state, tokens) => ({
    ...state,
    isAuthenticated: true,
    accessToken: tokens.access,
    refreshToken: tokens.refresh,
  })),
  on(CoreActions.resetTokens, (state) => ({
    ...state,
    isAuthenticated: false,
    accessToken: null,
    refreshToken: null,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return coreReducer(state, action);
}
