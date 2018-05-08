"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var superDetective_1 = require("../SuperDetective/superDetective");
var SuperDetecPipe = /** @class */ (function () {
    function SuperDetecPipe() {
    }
    SuperDetecPipe.prototype.transform = function (allDetec) {
        return allDetec.filter(function (detec) { return detec instanceof superDetective_1.superDetective; });
    };
    SuperDetecPipe = __decorate([
        core_1.Pipe({
            name: 'super'
        })
    ], SuperDetecPipe);
    return SuperDetecPipe;
}());
exports.SuperDetecPipe = SuperDetecPipe;
//# sourceMappingURL=SuperDetectiveFilter.js.map