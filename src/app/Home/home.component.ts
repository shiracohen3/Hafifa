import { Component, OnInit } from '@angular/core';
import {Detective} from '../Detective/Detective';
import { DetectiveService } from '../Services/detective.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  detectives: Detective[];
  constructor(private detectiveService: DetectiveService) {}

  title = 'ברוכים הבאים לעולם הבלשים';
  getDetective(): void {
    this.detectiveService.getDetectives()
      .subscribe(detectives => this.detectives = detectives);
  }

  ngOnInit() {
    this.getDetective();
  }
}
