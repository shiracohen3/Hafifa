import { Component, OnInit } from '@angular/core';
import {DetectiveComponent} from "../Detective/detective.component";
import {DetectiveService} from "../Services/detective.service";

@Component({
  selector: 'app-super-detective',
  templateUrl: './super-detective.component.html',
  styleUrls: ['./super-detective.component.css']
})
export class SuperDetectiveComponent extends DetectiveComponent implements OnInit {

  constructor(superDetectiveService:DetectiveService) {
    super(superDetectiveService);
  }

  ngOnInit() {
  }

}
