import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromCore from './reducers/core.reducer';
import { CoreEffects } from './effects/core.effects';
import { AuthService } from './services/auth.service';
import { UrlInterceptor } from './interceptors/url.interceptor';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    StoreModule.forFeature(fromCore.coreFeatureKey, fromCore.reducer),
    EffectsModule.forFeature([CoreEffects]),
  ],
  providers: [
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: UrlInterceptor, multi: true },
  ],
})
export class CoreModule {}
