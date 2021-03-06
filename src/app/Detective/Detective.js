"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Detective = /** @class */ (function () {
    function Detective(id, name, spec, cases) {
        this.id = id;
        this.name = name;
        this.spec = spec;
        this.cases = cases;
    }
    Detective.prototype.timeForSolveCase = function (level) {
        return (level / this.cases);
    };
    return Detective;
}());
exports.Detective = Detective;
//# sourceMappingURL=Detective.js.map