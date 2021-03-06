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
var E = /** @class */ (function (_super) {
    __extends(E, _super);
    function E() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return E;
}(Error));
exports.UNNEEDED = new E() instanceof E;
// tslint:disable-next-line:variable-name
exports.BuiltinClass = function () {
    // tslint:disable-next-line:arrow-return-shorthand
    return function (constructor) {
        var concrete = constructor;
        return exports.UNNEEDED
            ? constructor
            : // tslint:disable-next-line:max-classes-per-file
                /** @class */ (function (_super) {
                    __extends(class_1, _super);
                    function class_1() {
                        var _newTarget = this.constructor;
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        var _this = _super.apply(this, args) || this;
                        // tslint:disable-next-line:no-unsafe-any
                        Object.setPrototypeOf(_this, _newTarget.prototype);
                        return _this;
                    }
                    return class_1;
                }(concrete));
    };
};
//# sourceMappingURL=index.js.map