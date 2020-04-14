import { Action, createReducer, on } from '@ngrx/store';
import * as AuthActions from '../actions/auth.actions';

export const authFeatureKey = 'auth';

export interface State {
  isLoading: boolean;
  loginError: string;
  registerError: string;
}

export const initialState: State = {
  isLoading: false,
  loginError: null,
  registerError: null,
};

const authReducer = createReducer(
  initialState,
  on(AuthActions.login, (state) => ({ ...state, isLoading: true })),
  on(AuthActions.loginSuccess, (state) => ({
    ...state,
    isLoading: false,
    loginError: null,
  })),
  on(AuthActions.loginFailure, (state, props) => ({
    ...state,
    isLoading: false,
    loginError: props.error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return authReducer(state, action);
}
