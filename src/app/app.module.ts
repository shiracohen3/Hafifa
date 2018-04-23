import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './Main/app.component';
import { AddDetectiveComponent } from './Add_Detective/add-detective.component';
import { DetectiveComponent } from './Detective/detective.component';
import { CasesComponent } from './Case/cases.component';
import { HomeComponent} from './Home/home.component';
import { MenuComponent} from './Menu/menu.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {DetectiveService} from "./Services/detective.service";
import {CasesService} from "./Services/cases.service";
import {SolveCaseComponent} from "./Case/solveCase.component";
import {MatDialogModule} from '@angular/material';

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
    SolveCaseComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ReactiveFormsModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  entryComponents: [SolveCaseComponent],
  providers: [DetectiveService,
              CasesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
