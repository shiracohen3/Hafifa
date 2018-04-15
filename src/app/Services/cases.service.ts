import { Injectable } from '@angular/core';
import { Detective } from '../Detective/Detective';
import {Observable} from "rxjs/Observable";
import {of} from "rxjs/observable/of";
import index from "@angular/cli/lib/cli";
import {forEach} from "@angular/router/src/utils/collection";
import {Case} from "../Case/Case";

@Injectable()
export class CasesService {
  private cases: Case[];

  constructor() {
    this.cases = [
      {
        name: 'תיק התיקים',
        description: 'זהו תיאור מאוד מאוד יפה וארוך',
        level: 5
      },
      {
        name: 'גניבה',
        description: 'זהו תיק שנפתח בעקבות גניבה חמורה ביותר',
        level: 8
      },
      {
        name: 'רצח',
        description: 'זהו תיק שנפתח בעקבות רצח המוני',
        level: 2
      },
      {
        name: 'פגע וברח',
        description: 'מקרה של תאונת פגע וברח',
        level: 1
      },
      {
        name: 'לא ידוע',
        description: 'התיק עדיין נבדק',
        level: 8
      }
    ];
  }
  getCases(): Observable<Case[]> {
    return of (this.cases);
  }
  deleteCase(caseToRemove: Case): Observable<boolean> {
    const index = this.cases.indexOf(caseToRemove, 0);
    if (index >  -1) {
      this.cases.splice(index, 1);
      return of (true);
    }
    return of (false);
  }
  addCase(newCase: Case): Observable<any> {
    return of (this.cases.push(newCase));
  }
}
