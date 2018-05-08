import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Detective} from '../Detective/Detective';
import { DetectiveService } from '../Services/detective.service';
import {superDetective} from "../SuperDetective/superDetective";
import {SuperDetecPipe} from "../Pipes/SuperDetectiveFilter";
import {DetectivePipe} from "../Pipes/DetectiveFilter";
import {Observable} from "rxjs/Observable";
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private detectiveService: DetectiveService) {}

  detectives: Detective[] = [];
  superDetectives: superDetective[] = [];
  title = 'ברוכים הבאים לעולם הבלשים';

  getDetective(): void {
    let self = this;
    this.detectiveService.getDetectives().subscribe((detectives) => {
      detectives.forEach(detective => {
        if (detective instanceof superDetective) {
          self.superDetectives.push(detective);
        }
        else {
          self.detectives.push(detective);
        }
      })
    });
  }

  ngOnInit() {
    this.getDetective();
  }
}

