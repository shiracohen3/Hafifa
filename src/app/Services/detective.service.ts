import { Injectable } from '@angular/core';
import { Detective } from '../Detective/Detective';
import {Observable} from "rxjs/Observable";
import {of} from "rxjs/observable/of";

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
      }
    ];
  }
  getDetectives(): Observable<Detective[]> {
    return of(this.detectives);
  }
  addDetective(newDetective: Detective): Observable<any> {
    return of (this.detectives.push(newDetective));
  }
  deleteDetective(deleteDetective: Detective): Observable<any> {
    const index = this.detectives.indexOf(deleteDetective, 0);
    if (index >  -1) {
      return of (this.detectives.splice(index, 1));
    }
  }
}
