import { Pipe, PipeTransform } from '@angular/core';
import {Detective} from "../Detective/Detective";
import {superDetective} from "../SuperDetective/superDetective";

@Pipe({
  name: 'regular'
})
export class DetectivePipe implements PipeTransform {
  transform(allDetec: Detective[]) {
    return allDetec.filter(detec => !(detec instanceof superDetective));
  }
}
