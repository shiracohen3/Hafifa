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
Object.defineProperty(exports, "__esModule", { value: true });
var Detective_1 = require("../Detective/Detective");
var superDetective = /** @class */ (function (_super) {
    __extends(superDetective, _super);
    function superDetective(superId, superName, superSpec, superCases) {
        return _super.call(this, superId, superName, superSpec, superCases) || this;
    }
    superDetective.prototype.timeForSolveCase = function () {
        return 'suuper';
    };
    return superDetective;
}(Detective_1.Detective));
exports.superDetective = superDetective;
//# sourceMappingURL=superDetective.js.map