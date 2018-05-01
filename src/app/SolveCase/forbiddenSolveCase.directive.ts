import {AbstractControl, NG_VALIDATORS, Validator, ValidatorFn} from "@angular/forms";
import {Detective} from "../Detective/Detective";
import {Case} from "../Case/Case";
import {forEach} from "@angular/router/src/utils/collection";
import {Directive, Input} from "@angular/core";

export function forbiddenSolveCaseValidator(level: number): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    if(control.value.length > 0) {
      const sumCsesOfDetec = control.value.map(d => d.cases).reduce((sum, curr) => sum + curr);
      return sumCsesOfDetec <= level ? {'forbiddenName': {value: control.value}} : null;
    }
  };
}

@Directive({
  selector: '[appForbiddenSolveCase]',
  providers: [{provide: NG_VALIDATORS, useExisting: ForbiddenValidatorDirective, multi: true}]
})
export class ForbiddenValidatorDirective implements Validator {
  @Input('appForbiddenSolveCase') forbiddenName: number;

  validate(control: AbstractControl): {[key: string]: any} {
    return this.forbiddenName ? forbiddenSolveCaseValidator(this.forbiddenName)(control)
      : null;
  }
}

