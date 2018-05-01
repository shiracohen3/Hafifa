import {ChangeDetectorRef, Component, Inject, Injectable, OnInit} from '@angular/core';
import { Case } from '../Case/Case';
import {MAT_DIALOG_DATA, MatDialogRef, MatDialogConfig, MatDialog, ErrorStateMatcher} from "@angular/material";
import {FormGroup, FormBuilder, FormControl, Validators, FormGroupDirective, NgForm} from "@angular/forms";
import {Detective} from "../Detective/Detective";
import {forbiddenSolveCaseValidator, ForbiddenValidatorDirective} from "./forbiddenSolveCase.directive";

@Component({
  selector: 'solve-case',
  templateUrl: './solveCase.component.html',
  styleUrls: []
})

export class SolveCaseComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<any>) {}
  form: FormGroup;
  detectives: Detective[];
  currCase: Case;
  detectivesForCheck: Detective[] = [];
  canSolveCase: boolean = false;
  caseName: string;
  chooseDetectives: Detective[];
  timeForSolveCase: number;

  onChangeDetec(): void {
    debugger;
    let self = this;
    this.timeForSolveCase = this.detectivesForCheck.map(t => t.timeForSolveCase(self.currCase.level)).reduce((sum, currTime) => sum + currTime);
  }

  close() {
    this.dialogRef.close();
  }

  submit(){
    this.dialogRef.close(this.form.get('chooseDetectives').value);
  }

  ngOnInit() {
    this.form = new FormGroup({
        caseName: new FormControl(this.caseName, [ Validators.required, Validators.pattern('\\w+-\\d+$')]),
        chooseDetectives: new FormControl(this.chooseDetectives, [Validators.required,
          Validators.maxLength(4)])
    });
  }
}
