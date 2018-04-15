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
var of_1 = require("rxjs/observable/of");
var CasesService = /** @class */ (function () {
    function CasesService() {
        this.cases = [
            {
                name: 'תיק התיקים',
                description: 'זהו תיאור מאוד מאוד יפה וארוך',
                level: 5
            },
            {
                name: 'גניבה',
                description: 'זהו תיק שנפתח בעקבות גניבה חמורה ביותר',
                level: 8
            }
        ];
    }
    CasesService.prototype.getCases = function () {
        return of_1.of(this.cases);
    };
    CasesService.prototype.deleteCase = function (caseToRemove) {
        var index = this.cases.indexOf(caseToRemove, 0);
        if (index > -1) {
            this.cases.splice(index, 1);
            return of_1.of(true);
        }
        return of_1.of(false);
    };
    CasesService.prototype.addCase = function (newCase) {
        return of_1.of(this.cases.push(newCase));
    };
    CasesService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], CasesService);
    return CasesService;
}());
exports.CasesService = CasesService;
//# sourceMappingURL=cases.service.js.map