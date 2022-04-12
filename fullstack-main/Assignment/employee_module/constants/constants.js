"use strict";
exports.__esModule = true;
exports.Constants = void 0;
var Constants = /** @class */ (function () {
    function Constants() {
    }
    Constants.emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    Constants.numberRegex = /^[0-9]+$/;
	Constants.$FullNameRegEx = /^([a-zA-Z ]{2,40})$/;
    Constants.$ConNoRegEx = /^([0-9]{10})$/;
	Constants.$AgeRegEx = /^([0-9]{1,2})$/;
	Constants.$city = /^([a-zA-Z ]{2,40})$/;

    return Constants;
}());
exports.Constants = Constants;
