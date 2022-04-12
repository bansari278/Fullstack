import { ValidatorCLS } from "./validators";
import {Constants} from './constants'

let email="bthkkr@234.com";
let zipcode='234567';
let validator=new ValidatorCLS();

let validator1=validator.emailvalidate(email,Constants.emailRegex,0,6);
let validator2=validator.emailvalidate(zipcode,Constants.numberRegex,0,6);

console.log("Email validation:"+validator1);
console.log("zipcode validation:"+validator2);
