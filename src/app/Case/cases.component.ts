import { Component, OnInit } from '@angular/core';
import { Case } from './Case';
import {CasesService} from '../Services/cases.service';
import {SolveCaseComponent} from "./solveCase.component";
import {MatDialog, MatDialogConfig} from "@angular/material";

@Component({
  selector: 'app-cases',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.css']
})

export class CasesComponent implements OnInit {
  cases: Case[];
  constructor(private casesService: CasesService, public dialog: MatDialog) {}
  title = 'תיקים';

  getCases(): void {
    this.cases = Array(4);
    this.casesService.getCases()
      .subscribe(cases => this.cases = cases);
  }

  openDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    // dialogConfig.minHeight = '400px';
    // dialogConfig.minWidth = '60px';
    dialogConfig.height = '400px';
    dialogConfig.width = '600px';
    dialogConfig.position = {top: '50px', left: '50px'};
    dialogConfig.disableClose = true;

    const dialogRef = this.dialog.open(SolveCaseComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result =>  {
      console.log('Dialog closed: ', result);
    })
  }

  ngOnInit() {
    this.getCases();
  }
}
