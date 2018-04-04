import { Component, OnInit } from '@angular/core';
import { Case } from './Case';

@Component({
  selector: 'app-cases',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.css']
})

export class CasesComponent implements OnInit {
  constructor() {
  }
  title = 'תיקים';
  cases: Case[] = [
    {
      name: 'תיק התיקים',
      description: 'זהו תיאור מאוד מאוד יפה וארוך',
      level: 5
    },
    {
      name: 'גניבה',
      description: 'זהו תיק שנפתח בעקבות גניבה חמורה ביותר',
      level: 8
    }
  ];
  ngOnInit() {}
}
