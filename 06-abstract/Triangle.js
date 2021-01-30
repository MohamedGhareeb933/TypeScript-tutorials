"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Triangle = void 0;
var Shape_1 = require("./Shape");
var Triangle = /** @class */ (function (_super) {
    __extends(Triangle, _super);
    function Triangle(_x, _y, _z) {
        var _this = _super.call(this, _x, _y) || this;
        _this._z = _z;
        return _this;
    }
    Object.defineProperty(Triangle.prototype, "z", {
        get: function () {
            return this._z;
        },
        enumerable: false,
        configurable: true
    });
    Triangle.prototype.getInfo = function () {
        return _super.prototype.getInfo.call(this) + (" z = " + this._z);
    };
    Triangle.prototype.multiplyAll = function () {
        return this._x * this._y * this._z;
    };
    return Triangle;
}(Shape_1.Shape));
exports.Triangle = Triangle;
