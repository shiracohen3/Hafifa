import { Component, OnInit, Input } from '@angular/core';
import {Detective} from './Detective';

@Component({
  selector: 'detective-details',
  templateUrl: './detective.component.html',
  styleUrls: ['./detective.component.css']
})
export class DetectiveComponent implements OnInit {
  @Input() detective: Detective;
  @Input() detectives: Detective[];

  constructor() {}

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
    const index = this.detectives.indexOf(detectiveToRemove, 0);
    if (index >  -1) {
      this.detectives.splice(index, 1);
    }
  }

  ngOnInit() {}
}
