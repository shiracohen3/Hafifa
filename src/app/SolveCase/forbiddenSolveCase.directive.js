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
var forms_1 = require("@angular/forms");
var core_1 = require("@angular/core");
function forbiddenSolveCaseValidator(level) {
    return function (control) {
        if (control.value.length > 0) {
            var sumCsesOfDetec = control.value.map(function (d) { return d.cases; }).reduce(function (sum, curr) { return sum + curr; });
            return sumCsesOfDetec <= level ? { 'forbiddenName': { value: control.value } } : null;
        }
    };
}
exports.forbiddenSolveCaseValidator = forbiddenSolveCaseValidator;
var ForbiddenValidatorDirective = /** @class */ (function () {
    function ForbiddenValidatorDirective() {
    }
    ForbiddenValidatorDirective_1 = ForbiddenValidatorDirective;
    ForbiddenValidatorDirective.prototype.validate = function (control) {
        return this.forbiddenName ? forbiddenSolveCaseValidator(this.forbiddenName)(control)
            : null;
    };
    __decorate([
        core_1.Input('appForbiddenSolveCase'),
        __metadata("design:type", Number)
    ], ForbiddenValidatorDirective.prototype, "forbiddenName", void 0);
    ForbiddenValidatorDirective = ForbiddenValidatorDirective_1 = __decorate([
        core_1.Directive({
            selector: '[appForbiddenSolveCase]',
            providers: [{ provide: forms_1.NG_VALIDATORS, useExisting: ForbiddenValidatorDirective_1, multi: true }]
        })
    ], ForbiddenValidatorDirective);
    return ForbiddenValidatorDirective;
    var ForbiddenValidatorDirective_1;
}());
exports.ForbiddenValidatorDirective = ForbiddenValidatorDirective;
//# sourceMappingURL=forbiddenSolveCase.directive.js.map