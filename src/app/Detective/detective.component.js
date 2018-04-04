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
var Detective_1 = require("./Detective");
var detective_service_1 = require("../Services/detective.service");
var DetectiveComponent = /** @class */ (function () {
    function DetectiveComponent(detectiveService) {
        this.detectiveService = detectiveService;
        this.notEditMode = true;
    }
    DetectiveComponent.prototype.editName = function (event, id) {
        if (this.notEditMode) {
            this.notEditMode = false;
            document.getElementById(id).getElementsByClassName('edit')[0].innerHTML = 'save';
        }
        else {
            this.notEditMode = true;
            document.getElementById(id).getElementsByClassName('edit')[0].innerHTML = 'mode_edit';
        }
    };
    DetectiveComponent.prototype.removeDetective = function (event, detectiveToRemove) {
        this.detectiveService.deleteDetective(detectiveToRemove).subscribe(function (error) { return alert("קרתה שגיאה בזמן מחיקת הבלש"); });
    };
    DetectiveComponent.prototype.ngOnInit = function () { };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Detective_1.Detective)
    ], DetectiveComponent.prototype, "detective", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], DetectiveComponent.prototype, "detectives", void 0);
    DetectiveComponent = __decorate([
        core_1.Component({
            selector: 'detective-details',
            templateUrl: './detective.component.html',
            styleUrls: ['./detective.component.css']
        }),
        __metadata("design:paramtypes", [detective_service_1.DetectiveService])
    ], DetectiveComponent);
    return DetectiveComponent;
}());
exports.DetectiveComponent = DetectiveComponent;
//# sourceMappingURL=detective.component.js.map