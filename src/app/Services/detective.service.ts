import { Injectable } from '@angular/core';
import { Detective } from '../Detective/Detective';
import {Observable} from "rxjs/Observable";
import {of} from "rxjs/observable/of";
import index from "@angular/cli/lib/cli";
import {forEach} from "@angular/router/src/utils/collection";
import {superDetective} from "../SuperDetective/superDetective";

@Injectable()
export class DetectiveService {
  private detectives: Detective[];
  constructor() {
    this.detectives = [ new Detective(1, 'חושחש הבלש', 'מעקב', 3),
      new Detective(2, 'הבלש הרלש', 'חדות הבחנה', 8),
      new Detective(3, 'שירה שירה', 'ניסיון', 12),
      new superDetective(2, 'בלש כוכב', 'מיומנות אדירה', 20)];
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
  upgrade(detectiveToUpgrade: Detective): Observable<boolean> {
    this.addDetective(new superDetective(detectiveToUpgrade.id,
                                         detectiveToUpgrade.name,
                                         detectiveToUpgrade.spec,
                                         detectiveToUpgrade.cases));
    return (this.deleteDetective(detectiveToUpgrade));
  }
}
