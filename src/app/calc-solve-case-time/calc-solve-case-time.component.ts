import { Component, OnInit, Input, forwardRef } from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR, Validator, FormControl, NG_VALIDATORS} from "@angular/forms";
import {Detective} from "../Detective/Detective";

@Component({
  selector: 'app-calc-solve-case-time',
  templateUrl: './calc-solve-case-time.component.html',
  styleUrls: ['./calc-solve-case-time.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CalcSolveCaseTimeComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => CalcSolveCaseTimeComponent),
      multi: true,
    }]
})
export class CalcSolveCaseTimeComponent implements OnInit, ControlValueAccessor, Validator{

  @Input() caseLevel: number;
  @Input() detectives: Detective[];
  canSolveCase: boolean;
  timeForSolveCase: number;
  detectivesForCheck: Detective[];
  private propagateChange = (_: any) => { };

  writeValue(obj: any): void {
    debugger;
    if(obj) {
      this.detectivesForCheck = obj;
    }
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.propagateChange = fn;
  }

  private onChange(event) {
    let self = this;
    this.timeForSolveCase = this.detectivesForCheck.map(detec => detec.timeForSolveCase(self.caseLevel)).reduce((sum, currTime) => sum + currTime);
    this.timeForSolveCase > 2 ? this.canSolveCase=false : this.canSolveCase=true;
    this.propagateChange(this.canSolveCase);
    debugger;
  }

  validate(c: FormControl): { [key: string]: any; } {
    debugger;
    return (this.canSolveCase) ? null : {
        solveCaseError: {
          valid: false
        }
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
