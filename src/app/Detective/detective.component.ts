import { Component, OnInit, Input } from '@angular/core';
import {Detective} from './Detective';
import {DetectiveService} from "../Services/detective.service";

@Component({
  selector: 'detective-details',
  templateUrl: './detective.component.html',
  styleUrls: ['./detective.component.css']
})
export class DetectiveComponent implements OnInit {
  @Input() detective: Detective;
  @Input() detectives: Detective[];

  constructor(private detectiveService: DetectiveService) {}

  notEditMode = true;
  public editName(event, id) {
    if (this.notEditMode) {
      this.notEditMode = false;
      document.getElementById(id).getElementsByClassName('edit')[0].innerHTML = 'save';
    } else {
      this.notEditMode = true;
      document.getElementById(id).getElementsByClassName('edit')[0].innerHTML = 'mode_edit';
    }
  }

  public removeDetective(event, detectiveToRemove) {
    this.detectiveService.deleteDetective(detectiveToRemove).subscribe(success => alert("הבלש נמחק בהצלחה"));
  }

  ngOnInit() {}
}
