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
var Detective_1 = require("../Detective/Detective");
var of_1 = require("rxjs/observable/of");
var superDetective_1 = require("../SuperDetective/superDetective");
var DetectiveService = /** @class */ (function () {
    function DetectiveService() {
        this.detectives = [new Detective_1.Detective(1, 'חושחש הבלש', 'מעקב', 3),
            new Detective_1.Detective(2, 'הבלש הרלש', 'חדות הבחנה', 8),
            new Detective_1.Detective(3, 'שירה שירה', 'ניסיון', 12),
            new superDetective_1.superDetective(2, 'בלש כוכב', 'מיומנות אדירה', 20)];
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
            this.detectives.splice(index, 1);
            return of_1.of(true);
        }
        return of_1.of(false);
    };
    DetectiveService.prototype.editDetective = function (editDetective) {
        // Not realy used because the detectives list already update
        var wasEdited = false;
        this.detectives.forEach(function (detective) {
            if (detective.id === editDetective.id) {
                detective.name = editDetective.name;
                detective.spec = editDetective.spec;
                detective.cases = editDetective.cases;
                wasEdited = true;
            }
        });
        return of_1.of(wasEdited);
    };
    DetectiveService.prototype.upgrade = function (detectiveToUpgrade) {
        this.addDetective(new superDetective_1.superDetective(detectiveToUpgrade.id, detectiveToUpgrade.name, detectiveToUpgrade.spec, detectiveToUpgrade.cases));
        return (this.deleteDetective(detectiveToUpgrade));
    };
    DetectiveService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], DetectiveService);
    return DetectiveService;
}());
exports.DetectiveService = DetectiveService;
//# sourceMappingURL=detective.service.js.map