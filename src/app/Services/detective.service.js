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
var DetectiveService = /** @class */ (function () {
    function DetectiveService() {
        this.detectives = [
            {
                id: 1,
                name: 'חושחש הבלש',
                spec: 'מעקב',
                cases: 5
            },
            {
                id: 2,
                name: 'הבלש הרלש',
                spec: 'חדות הבחנה',
                cases: 8
            }
        ];
    }
    DetectiveService.prototype.getDetectives = function () {
        return of_1.of(this.detectives);
    };
    DetectiveService.prototype.addDetective = function (newDetective) {
        return of_1.of(this.detectives.push(newDetective));
    };
    DetectiveService.prototype.deleteDetective = function (deleteDetective) {
        var index = this.detectives.indexOf(deleteDetective, 0);
        if (index > -1) {
            return of_1.of(this.detectives.splice(index, 1));
        }
    };
    DetectiveService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], DetectiveService);
    return DetectiveService;
}());
exports.DetectiveService = DetectiveService;
//# sourceMappingURL=detective.service.js.map