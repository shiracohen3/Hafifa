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
var material_1 = require("@angular/material");
var forms_1 = require("@angular/forms");
var SolveCaseComponent = /** @class */ (function () {
    function SolveCaseComponent(dialogRef, formBuilder) {
        this.dialogRef = dialogRef;
        this.formBuilder = formBuilder;
    }
    SolveCaseComponent.prototype.changePosition = function () {
        this.dialogRef.updatePosition({ top: '50px', left: '50px' });
    };
    ;
    SolveCaseComponent.prototype.save = function () {
        this.dialogRef.close('hiiii');
    };
    SolveCaseComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    SolveCaseComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            name: ''
        });
    };
    SolveCaseComponent.prototype.submit = function (form) {
        this.dialogRef.close('$form.value');
    };
    SolveCaseComponent = __decorate([
        core_1.Component({
            selector: 'solve-case',
            templateUrl: './solveCase.component.html',
            styleUrls: []
        }),
        __metadata("design:paramtypes", [material_1.MatDialogRef, forms_1.FormBuilder])
    ], SolveCaseComponent);
    return SolveCaseComponent;
}());
exports.SolveCaseComponent = SolveCaseComponent;
//# sourceMappingURL=solveCase.component.js.map