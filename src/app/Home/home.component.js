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
var superDetective_1 = require("../SuperDetective/superDetective");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(detectiveService) {
        this.detectiveService = detectiveService;
        this.detectives = [];
        this.superDetectives = [];
        this.title = 'ברוכים הבאים לעולם הבלשים';
    }
    HomeComponent.prototype.getDetective = function () {
        var self = this;
        this.detectiveService.getDetectives().subscribe(function (detectives) {
            detectives.forEach(function (detective) {
                if (detective instanceof superDetective_1.superDetective) {
                    self.superDetectives.push(detective);
                }
                else {
                    self.detectives.push(detective);
                }
            });
        });
    };
    HomeComponent.prototype.ngOnInit = function () {
        this.getDetective();
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css']
        }),
        __metadata("design:paramtypes", [detective_service_1.DetectiveService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map