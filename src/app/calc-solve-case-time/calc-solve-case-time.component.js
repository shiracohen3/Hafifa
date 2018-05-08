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
var forms_1 = require("@angular/forms");
var CalcSolveCaseTimeComponent = /** @class */ (function () {
    function CalcSolveCaseTimeComponent() {
        this.propagateChange = function (_) { };
    }
    CalcSolveCaseTimeComponent_1 = CalcSolveCaseTimeComponent;
    CalcSolveCaseTimeComponent.prototype.writeValue = function (obj) {
        if (obj) {
            this.detectives = obj;
        }
    };
    CalcSolveCaseTimeComponent.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    CalcSolveCaseTimeComponent.prototype.registerOnTouched = function (fn) {
    };
    CalcSolveCaseTimeComponent.prototype.onChange = function (event) {
        var self = this;
        this.timeForSolveCase = this.detectives.map(function (detec) { return detec.timeForSolveCase(self.caseLevel); }).reduce(function (sum, currTime) { return sum + currTime; });
        this.timeForSolveCase > 1 ? this.canSolveCase = false : this.canSolveCase = true;
        this.propagateChange(this.canSolveCase);
    };
    CalcSolveCaseTimeComponent.prototype.validate = function (c) {
        return (this.canSolveCase) ? null : {
            solveCaseError: {
                valid: false
            }
        };
    };
    CalcSolveCaseTimeComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], CalcSolveCaseTimeComponent.prototype, "caseLevel", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], CalcSolveCaseTimeComponent.prototype, "detectives", void 0);
    CalcSolveCaseTimeComponent = CalcSolveCaseTimeComponent_1 = __decorate([
        core_1.Component({
            selector: 'app-calc-solve-case-time',
            templateUrl: './calc-solve-case-time.component.html',
            styleUrls: ['./calc-solve-case-time.component.css'],
            providers: [
                {
                    provide: forms_1.NG_VALUE_ACCESSOR,
                    useExisting: core_1.forwardRef(function () { return CalcSolveCaseTimeComponent_1; }),
                    multi: true,
                },
                {
                    provide: forms_1.NG_VALIDATORS,
                    useExisting: core_1.forwardRef(function () { return CalcSolveCaseTimeComponent_1; }),
                    multi: true,
                }
            ]
        }),
        __metadata("design:paramtypes", [])
    ], CalcSolveCaseTimeComponent);
    return CalcSolveCaseTimeComponent;
    var CalcSolveCaseTimeComponent_1;
}());
exports.CalcSolveCaseTimeComponent = CalcSolveCaseTimeComponent;
//# sourceMappingURL=calc-solve-case-time.component.js.map