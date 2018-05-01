import { Component, OnInit } from '@angular/core';
import { Case } from './Case';
import {CasesService} from '../Services/cases.service';
import {SolveCaseComponent} from "../SolveCase/solveCase.component";
import {MatDialog, MatDialogConfig} from "@angular/material";
import {Detective} from "../Detective/Detective";
import {DetectiveService} from "../Services/detective.service";

@Component({
  selector: 'app-cases',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.css']
})

export class CasesComponent implements OnInit {
  cases: Case[];
  detectives: Detective[];
  constructor(private casesService: CasesService, private detectiveService: DetectiveService, public dialog: MatDialog) {}
  title = 'תיקים';

  getCases(): void {
    this.cases = Array(4);
    this.casesService.getCases()
      .subscribe(cases => this.cases = cases);
  }
  getDetectives(): void {
    this.detectiveService.getDetectives()
      .subscribe(detectives => this.detectives = detectives);
  }

  public openDialog(currCase): void {
    let dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.height = '300px';
    dialogConfig.width = '300px';

    let dialogRef = this.dialog.open(SolveCaseComponent, dialogConfig);
    dialogRef.componentInstance.detectives = this.detectives;
    dialogRef.componentInstance.currCase = currCase;

    dialogRef.afterClosed().subscribe(detectivesSolveCase =>  {
      let self = this;
      detectivesSolveCase.forEach(function(detec) {
        detec.cases += 1;
        self.detectiveService.editDetective(detec);
      });

      this.casesService.deleteCase(currCase);
    })
  }


  ngOnInit() {
    this.getCases();
    this.getDetectives();
  }
}
