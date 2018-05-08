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
    function SolveCaseComponent(dialogRef) {
        this.dialogRef = dialogRef;
        this.detectivesForCheck = [];
    }
    SolveCaseComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    SolveCaseComponent.prototype.submit = function () {
        this.dialogRef.close(this.form.get('chooseDetectives').value);
    };
    SolveCaseComponent.prototype.ngOnInit = function () {
        this.form = new forms_1.FormGroup({
            caseName: new forms_1.FormControl(this.caseName, [forms_1.Validators.required, forms_1.Validators.pattern('\\w+-\\d+$')]),
            chooseDetectives: new forms_1.FormControl(this.chooseDetectives, [forms_1.Validators.required,
                forms_1.Validators.maxLength(4)]),
            detectiveSolveCase: new forms_1.FormControl('', forms_1.Validators.required)
        });
    };
    SolveCaseComponent = __decorate([
        core_1.Component({
            selector: 'solve-case',
            templateUrl: './solveCase.component.html',
            styleUrls: []
        }),
        __metadata("design:paramtypes", [material_1.MatDialogRef])
    ], SolveCaseComponent);
    return SolveCaseComponent;
}());
exports.SolveCaseComponent = SolveCaseComponent;
//# sourceMappingURL=solveCase.component.js.map