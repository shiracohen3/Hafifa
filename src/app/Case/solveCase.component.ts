import {Component, Inject, Injectable, OnInit} from '@angular/core';
import { Case } from './Case';
import {MAT_DIALOG_DATA, MatDialogRef, MatDialogConfig, MatDialog} from "@angular/material";
import { FormGroup, FormBuilder} from "@angular/forms";

@Component({
  selector: 'solve-case',
  templateUrl: './solveCase.component.html',
  styleUrls: []
})

export class SolveCaseComponent implements OnInit {
  form: FormGroup;

  constructor(private dialogRef: MatDialogRef<any>, private formBuilder: FormBuilder) {}

  changePosition() {
    this.dialogRef.updatePosition({ top: '50px', left: '50px' });
  };
  save() {
    this.dialogRef.close('hiiii');
  }
  close() {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
        name:''
    })
  }

  submit(form){
    alert('submit');
    this.dialogRef.close('$form.value');
  }
}
