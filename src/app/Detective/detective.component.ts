import { Component, OnInit, Input } from '@angular/core';
import {Detective} from './Detective';
import {DetectiveService} from "../Services/detective.service";
import {isSuccess} from "@angular/http/src/http_utils";

@Component({
  selector: 'detective-details',
  templateUrl: './detective.component.html',
  styleUrls: ['./detective.component.css']
})
export class DetectiveComponent implements OnInit {
  @Input() detective: Detective;

  constructor(private detectiveService: DetectiveService) {}

  notEditMode = true;
  public editName(event, id) {
    if (this.notEditMode) {
      this.notEditMode = false;
      document.getElementById(id).getElementsByClassName('edit')[0].innerHTML = 'save';
    } else {
      this.notEditMode = true;
      document.getElementById(id).getElementsByClassName('edit')[0].innerHTML = 'mode_edit';
      this.editDetective();
    }
  }

  public editDetective() {
    this.detectiveService.editDetective(this.detective).subscribe(success => alert("הבלש עודכן בהצלחה!"));
  }

  public removeDetective(event, detectiveToRemove) {
    this.detectiveService.deleteDetective(detectiveToRemove).subscribe(success => alert("הבלש נמחק בהצלחה"));
  }

  public upgradeDetective(event, detectivetoUpgarde) {
    this.detectiveService.upgrade(detectivetoUpgarde).subscribe(success => alert("הבלש שודרג בהצלחה!"));
  }

  ngOnInit() {}
}
