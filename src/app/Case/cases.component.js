"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var cases_service_1 = require("../Services/cases.service");
var solveCase_component_1 = require("./solveCase.component");
var material_1 = require("@angular/material");
var CasesComponent = /** @class */ (function () {
    function CasesComponent(casesService, dialog) {
        this.casesService = casesService;
        this.dialog = dialog;
        this.title = 'תיקים';
    }
    CasesComponent.prototype.getCases = function () {
        var _this = this;
        this.cases = Array(4);
        this.casesService.getCases()
            .subscribe(function (cases) { return _this.cases = cases; });
    };
    CasesComponent.prototype.openDialog = function () {
        var dialogConfig = new material_1.MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        // dialogConfig.minHeight = '400px';
        // dialogConfig.minWidth = '60px';
        dialogConfig.height = '400px';
        dialogConfig.width = '600px';
        dialogConfig.position = { top: '50px', left: '50px' };
        dialogConfig.disableClose = true;
        var dialogRef = this.dialog.open(solveCase_component_1.SolveCaseComponent, dialogConfig);
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('Dialog closed: ', result);
        });
    };
    CasesComponent.prototype.ngOnInit = function () {
        this.getCases();
    };
    CasesComponent = __decorate([
        core_1.Component({
            selector: 'app-cases',
            templateUrl: './case.component.html',
            styleUrls: ['./case.component.css']
        }),
        __metadata("design:paramtypes", [cases_service_1.CasesService, material_1.MatDialog])
    ], CasesComponent);
    return CasesComponent;
}());
exports.CasesComponent = CasesComponent;
//# sourceMappingURL=cases.component.js.map