import {Ivalidator} from './interface_module'
import {Constants} from './constants'
var emailstr=Constants.emailRegex
class ValidatorCLS implements Ivalidator
{
    
    emailvalidate(s:string,regEx:any,min:number,max:number):boolean {
        const r= regEx.test(s);
        return r;
       
    }
    // zipcodevalidate(s: string): boolean {
    //     return regEx.test(s);
    // }
}
export{ValidatorCLS};

