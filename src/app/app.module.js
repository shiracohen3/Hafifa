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
var add_detective_component_1 = require("./Add_Detective/add-detective.component");
var detective_component_1 = require("./Detective/detective.component");
var cases_component_1 = require("./Case/cases.component");
var home_component_1 = require("./Home/home.component");
var menu_component_1 = require("./Menu/menu.component");
var animations_1 = require("@angular/platform-browser/animations");
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
                menu_component_1.MenuComponent
            ],
            imports: [
                router_1.RouterModule.forRoot(appRoutes),
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                animations_1.BrowserAnimationsModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map