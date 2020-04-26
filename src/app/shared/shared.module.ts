import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { HasErrorPipe } from './pipes/has-error.pipe';

@NgModule({
  declarations: [NavComponent, HasErrorPipe],
  imports: [CommonModule, RouterModule],
  exports: [NavComponent, HasErrorPipe],
})
export class SharedModule {}
