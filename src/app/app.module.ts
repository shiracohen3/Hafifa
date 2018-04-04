import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './Main/app.component';
import { AddDetectiveComponent } from './Add_Detective/add-detective.component';
import { DetectiveComponent } from './Detective/detective.component';
import { CasesComponent } from './Case/cases.component';
import { HomeComponent} from './Home/home.component';
import { MenuComponent} from './Menu/menu.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

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
    MenuComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }