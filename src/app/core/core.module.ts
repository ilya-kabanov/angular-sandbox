import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromCore from './reducers/core.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CoreEffects } from './effects/core.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromCore.coreFeatureKey, fromCore.reducer),
    EffectsModule.forFeature([CoreEffects]),
  ],
})
export class CoreModule {}
