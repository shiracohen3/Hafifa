import { Injectable } from '@angular/core';
import { Detective } from '../Detective/Detective';
import {Observable} from "rxjs/Observable";
import {of} from "rxjs/observable/of";
import index from "@angular/cli/lib/cli";
import {forEach} from "@angular/router/src/utils/collection";

@Injectable()
export class DetectiveService {
  private detectives: Detective[];
  constructor() {
    this.detectives = [
      {
        id: 1,
        name: 'חושחש הבלש',
        spec: 'מעקב',
        cases: 5
      },
      {
        id: 2,
        name: 'הבלש הרלש',
        spec: 'חדות הבחנה',
        cases: 8
      },
      {
        id: 3,
        name: 'שירה שירה',
        spec: 'ניסיון',
        cases: 12
      }
    ];
  }
  getDetectives(): Observable<Detective[]> {
    return of(this.detectives);
  }
  addDetective(newDetective: Detective): Observable<any> {
    return of (this.detectives.push(newDetective));
  }
  deleteDetective(deleteDetective: Detective): Observable<boolean> {
    const index = this.detectives.indexOf(deleteDetective, 0);
    if (index >  -1) {
      this.detectives.splice(index, 1);
      return of (true);
    }
    return of (false);
  }
  editDetective(editDetective: Detective): Observable<boolean> {
    // Not realy used because the detectives list already update
    let wasEdited = false;
    this.detectives.forEach(detective => {
      if (detective.id === editDetective.id) {
        detective.name = editDetective.name;
        detective.spec = editDetective.spec;
        detective.cases = editDetective.cases;
        wasEdited = true;
      }
    })
    return of (wasEdited);
  }
}
