import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './Main/app.component';
import { AddDetectiveComponent } from './AddDetective/add-detective.component';
import { DetectiveComponent } from './Detective/detective.component';
import { CasesComponent } from './Case/cases.component';
import { HomeComponent} from './Home/home.component';
import { MenuComponent} from './Menu/menu.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {DetectiveService} from "./Services/detective.service";
import {CasesService} from "./Services/cases.service";
import {SolveCaseComponent} from "./SolveCase/solveCase.component";
import {
  MAT_DIALOG_DEFAULT_OPTIONS,
  MatButtonModule, MatCheckboxModule,
  MatDialogActions,
  MatDialogContent,
  MatDialogModule, MatFormField, MatFormFieldModule, MatInputModule, MatOption, MatOptionModule, MatSelectModule
} from '@angular/material';
import {ForbiddenValidatorDirective} from "./SolveCase/forbiddenSolveCase.directive";
import { SuperDetectiveComponent } from './SuperDetective/super-detective.component';
import {SuperDetecPipe} from "./Pipes/SuperDetectiveFilter";
import {DetectivePipe} from "./Pipes/DetectiveFilter";
import {CommonModule} from "@angular/common";
import { CalcSolveCaseTimeComponent } from './calc-solve-case-time/calc-solve-case-time.component';

const appRoutes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'cases', component: CasesComponent},
    {path: 'home', component: HomeComponent}
  ];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddDetectiveComponent,
    DetectiveComponent,
    CasesComponent,
    MenuComponent,
    ForbiddenValidatorDirective,
    SolveCaseComponent,
    SuperDetectiveComponent,
    SuperDetecPipe,
    DetectivePipe,
    CalcSolveCaseTimeComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatOptionModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    CommonModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  entryComponents: [SolveCaseComponent],
  providers: [DetectiveService,
              CasesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
