import { Component, OnInit } from '@angular/core';
import {Detective} from '../Detective/Detective';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor() {}

  title = 'ברוכים הבאים לעולם הבלשים';
  detectives: Detective[] = [
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

  ngOnInit() {}
}
