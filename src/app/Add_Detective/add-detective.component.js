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
var detective_service_1 = require("../Services/detective.service");
var Detective_1 = require("../Detective/Detective");
var AddDetectiveComponent = /** @class */ (function () {
    function AddDetectiveComponent(detectiveService) {
        this.detectiveService = detectiveService;
        this.nextDetecId = 2;
        this.title = 'הוספת בלש חדש';
    }
    AddDetectiveComponent.prototype.addNewDetective = function () {
        var newDetecName = document.getElementById("newName").value;
        var newDetecSpec = document.getElementById("newSpec").value;
        var newDetecCases = document.getElementById("newCases").value;
        var newDetective = new Detective_1.Detective(this.nextDetecId, newDetecName, newDetecSpec, Number(newDetecCases));
        this.detectiveService.addDetective(newDetective).subscribe(function (error) { return alert("קרתה שגיאה בהוספת הבלש"); });
        this.nextDetecId++;
    };
    AddDetectiveComponent = __decorate([
        core_1.Component({
            selector: 'app-add-detective',
            templateUrl: './add-detective.component.html',
            styleUrls: ['../Home/home.component.css']
        }),
        __metadata("design:paramtypes", [detective_service_1.DetectiveService])
    ], AddDetectiveComponent);
    return AddDetectiveComponent;
}());
exports.AddDetectiveComponent = AddDetectiveComponent;
//# sourceMappingURL=add-detective.component.js.map