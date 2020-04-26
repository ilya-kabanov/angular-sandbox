import { Pipe, PipeTransform } from '@angular/core';
import { AbstractControl } from '@angular/forms';

type ErrorType = 'required'; // todo: add other types

@Pipe({
  name: 'hasError',
  pure: false,
})
export class HasErrorPipe implements PipeTransform {
  transform(control: AbstractControl, errorType?: ErrorType): boolean {
    if (!control.invalid || !(control.dirty || control.touched)) return false;

    if (errorType == null) return true;

    switch (errorType) {
      case 'required':
        return control.errors.required;
      default:
        return false;
    }
  }
}
