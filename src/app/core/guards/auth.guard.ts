import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import * as CoreSelectors from '../selectors/core.selectors';
import * as CoreActions from '../actions/core.actions';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private store: Store) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.store.pipe(
      select(CoreSelectors.selectIsAuthenticated),
      map((isAuthenticated) => {
        if (!isAuthenticated) {
          this.store.dispatch(CoreActions.authRequired({ url: state.url }));
          return false;
        }

        return true;
      })
    );
  }
}
