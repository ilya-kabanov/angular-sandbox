import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as AuthActions from '../../actions/auth.actions';

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
      AuthActions.login({ email: 'abc@example.com', password: 'password' })
    );
  }
}
