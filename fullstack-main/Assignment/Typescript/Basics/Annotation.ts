
function showFun(id:number, nm:string)  
{  
    console.log("Id = " + id + ", Name = " + nm);  
}  
showFun(1, "Bansari Thakkar");


var person : {   
    id: number;   
    nm: string;   
};   
  
person = {   
  id: 1,   
  nm : "Bansari Thakkar"  
}  

console.log(person.id+" "+person.nm);


function sum(n1: number, n2: number )  
{  
    return n1 + n2;    
}  
let Addition: number = sum(10,20);   
console.log("Add: "+Addition);
