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
var CasesComponent = /** @class */ (function () {
    function CasesComponent() {
        this.title = 'תיקים';
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
    CasesComponent.prototype.ngOnInit = function () { };
    CasesComponent = __decorate([
        core_1.Component({
            selector: 'app-cases',
            templateUrl: './case.component.html',
            styleUrls: ['./case.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], CasesComponent);
    return CasesComponent;
}());
exports.CasesComponent = CasesComponent;
//# sourceMappingURL=cases.component.js.map