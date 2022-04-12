const mongoose=require('mongoose'); //obj of mongoose
var constant_1 = require("../constants/constants");

const { stringify } = require('querystring');

var employeeSchema=new mongoose.Schema({
    fullname:{
        type:String,
        required:'This field is required.'
    },
    email:{
        type:String,
        required:'This field is required.'
    },
    mobile:{
        type:String,
        required:'This field is required.'
    },
    city:{
        type:String,
        required:'This field is required.'
    },
    salary:{
        type:Number,
        required:'This field is required.'
    },
    age:{
        type:Number,
        required:'This field is required.'
    }

});
employeeSchema.path('email').validate((val) => {
    //emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //return emailRegex.test(val);
    return constant_1.Constants.emailRegex.test(val);

}, 'Invalid e-mail.');

employeeSchema.path('fullname').validate((val) => {
    return constant_1.Constants.$FullNameRegEx.test(val);

}, 'Invalid fullname.');

employeeSchema.path('mobile').validate((val) => {
    return constant_1.Constants.$ConNoRegEx.test(val);

}, 'Invalid Contact No.');

employeeSchema.path('age').validate((val) => {
    return constant_1.Constants.$AgeRegEx.test(val);

}, 'Invalid Age.');
employeeSchema.path('salary').validate((val) => {
    return constant_1.Constants.numberRegex.test(val);

}, 'Invalid Salary.');
employeeSchema.path('city').validate((val) => {
    return constant_1.Constants.$city.test(val);

}, 'Invalid Age.');

mongoose.model('Employee', employeeSchema);
