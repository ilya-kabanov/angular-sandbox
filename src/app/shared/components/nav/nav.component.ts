import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as CoreSelectors from '../../../core/selectors/core.selectors';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  isAuthenticated: boolean;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store
      .select(CoreSelectors.selectIsAuthenticated)
      .subscribe((isAuthenticated) => (this.isAuthenticated = isAuthenticated));
  }
}
