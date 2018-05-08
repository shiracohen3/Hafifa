import { Pipe, PipeTransform } from '@angular/core';
import {Detective} from "../Detective/Detective";
import {superDetective} from "../SuperDetective/superDetective";

@Pipe({
  name: 'super'
})
export class SuperDetecPipe implements PipeTransform {
  transform(allDetec: Detective[]) {
    return allDetec.filter(detec => detec instanceof superDetective);
  }
}
