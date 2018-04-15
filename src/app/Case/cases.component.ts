import { Component, OnInit } from '@angular/core';
import { Case } from './Case';
import {CasesService} from "../Services/cases.service";

@Component({
  selector: 'app-cases',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.css']
})

export class CasesComponent implements OnInit {
  cases: Case[];
  constructor(private casesService: CasesService) {}
  title = 'תיקים';

  getCases(): void {
    this.cases = Array(4);
    this.casesService.getCases()
      .subscribe(cases => this.cases = cases);
  }

  ngOnInit() {
    this.getCases();
  }
}
