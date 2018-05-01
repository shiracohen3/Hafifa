import {Component, Input} from '@angular/core';
import { DetectiveService } from '../Services/detective.service';
import {Detective} from "../Detective/Detective";

@Component({
  selector: 'app-add-detective',
  templateUrl: './add-detective.component.html',
  styleUrls: ['../Home/home.component.css']
})

export class AddDetectiveComponent {
  nextDetecId: number = 2;
  constructor(private detectiveService: DetectiveService) {}
  title = 'הוספת בלש חדש';
  addNewDetective(): void {
    var newDetecName = (<HTMLInputElement>document.getElementById("newName")).value;
    var newDetecSpec = (<HTMLInputElement>document.getElementById("newSpec")).value;
    var newDetecCases = (<HTMLInputElement>document.getElementById("newCases")).value;
    let newDetective: Detective = new Detective(this.nextDetecId, newDetecName, newDetecSpec, Number(newDetecCases));
    this.detectiveService.addDetective(newDetective).subscribe(success => alert("הבלש התווסף בהצלחה"));
    this.nextDetecId++;
    this.clearInputText();
  }
  clearInputText(): void {
    (<HTMLInputElement>document.getElementById("newName")).value = '';
    (<HTMLInputElement>document.getElementById("newSpec")).value = '';
    (<HTMLInputElement>document.getElementById("newCases")).value = '';
  }
}
