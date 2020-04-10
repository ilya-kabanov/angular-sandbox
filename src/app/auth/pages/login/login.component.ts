import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as CoreActions from '../../../core/actions/core.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {}

  login(): void {
    this.store.dispatch(
      CoreActions.setTokens({ access: 'access123', refresh: 'refresh123' })
    );
  }
}
