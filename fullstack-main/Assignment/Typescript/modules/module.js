"use strict";
exports.__esModule = true;
var validators_1 = require("./validators");
var constants_1 = require("./constants");
var email = "bthkkr@234.com";
var zipcode = '234567';
var validator = new validators_1.ValidatorCLS();
var validator1 = validator.emailvalidate(email, constants_1.Constants.emailRegex, 0, 6);
var validator2 = validator.emailvalidate(zipcode, constants_1.Constants.numberRegex, 0, 6);
console.log("Email validation:" + validator1);
console.log("zipcode validation:" + validator2);
