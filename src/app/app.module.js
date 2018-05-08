"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var app_component_1 = require("./Main/app.component");
var add_detective_component_1 = require("./AddDetective/add-detective.component");
var detective_component_1 = require("./Detective/detective.component");
var cases_component_1 = require("./Case/cases.component");
var home_component_1 = require("./Home/home.component");
var menu_component_1 = require("./Menu/menu.component");
var animations_1 = require("@angular/platform-browser/animations");
var detective_service_1 = require("./Services/detective.service");
var cases_service_1 = require("./Services/cases.service");
var solveCase_component_1 = require("./SolveCase/solveCase.component");
var material_1 = require("@angular/material");
var forbiddenSolveCase_directive_1 = require("./SolveCase/forbiddenSolveCase.directive");
var super_detective_component_1 = require("./SuperDetective/super-detective.component");
var SuperDetectiveFilter_1 = require("./Pipes/SuperDetectiveFilter");
var DetectiveFilter_1 = require("./Pipes/DetectiveFilter");
var common_1 = require("@angular/common");
var calc_solve_case_time_component_1 = require("./calc-solve-case-time/calc-solve-case-time.component");
var appRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'cases', component: cases_component_1.CasesComponent },
    { path: 'home', component: home_component_1.HomeComponent }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                add_detective_component_1.AddDetectiveComponent,
                detective_component_1.DetectiveComponent,
                cases_component_1.CasesComponent,
                menu_component_1.MenuComponent,
                forbiddenSolveCase_directive_1.ForbiddenValidatorDirective,
                solveCase_component_1.SolveCaseComponent,
                super_detective_component_1.SuperDetectiveComponent,
                SuperDetectiveFilter_1.SuperDetecPipe,
                DetectiveFilter_1.DetectivePipe,
                calc_solve_case_time_component_1.CalcSolveCaseTimeComponent
            ],
            imports: [
                router_1.RouterModule.forRoot(appRoutes),
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                animations_1.BrowserAnimationsModule,
                material_1.MatDialogModule,
                forms_1.ReactiveFormsModule,
                material_1.MatSelectModule,
                material_1.MatFormFieldModule,
                material_1.MatOptionModule,
                material_1.MatButtonModule,
                material_1.MatCheckboxModule,
                material_1.MatInputModule,
                common_1.CommonModule
            ],
            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA],
            entryComponents: [solveCase_component_1.SolveCaseComponent],
            providers: [detective_service_1.DetectiveService,
                cases_service_1.CasesService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map