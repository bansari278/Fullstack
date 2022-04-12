"use strict";
exports.__esModule = true;
exports.ValidatorCLS = void 0;
var constants_1 = require("./constants");
var emailstr = constants_1.Constants.emailRegex;
var ValidatorCLS = /** @class */ (function () {
    function ValidatorCLS() {
    }
    ValidatorCLS.prototype.emailvalidate = function (s, regEx, min, max) {
        var r = regEx.test(s);
        return r;
    };
    return ValidatorCLS;
}());
exports.ValidatorCLS = ValidatorCLS;
