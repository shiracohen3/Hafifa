"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var detective_component_1 = require("../Detective/detective.component");
var detective_service_1 = require("../Services/detective.service");
var SuperDetectiveComponent = /** @class */ (function (_super) {
    __extends(SuperDetectiveComponent, _super);
    function SuperDetectiveComponent(superDetectiveService) {
        return _super.call(this, superDetectiveService) || this;
    }
    SuperDetectiveComponent.prototype.ngOnInit = function () {
    };
    SuperDetectiveComponent = __decorate([
        core_1.Component({
            selector: 'app-super-detective',
            templateUrl: './super-detective.component.html',
            styleUrls: ['./super-detective.component.css']
        }),
        __metadata("design:paramtypes", [detective_service_1.DetectiveService])
    ], SuperDetectiveComponent);
    return SuperDetectiveComponent;
}(detective_component_1.DetectiveComponent));
exports.SuperDetectiveComponent = SuperDetectiveComponent;
//# sourceMappingURL=super-detective.component.js.map