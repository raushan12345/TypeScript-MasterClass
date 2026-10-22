/*
Special data types:
1> null -->you have intentiionaly decide to give this value.
2> undefined -->create a variable but dont set the value
3> any --> Rejecting the type safety features in TS [BAD]
any: TS dont do type check for this variable!
4> unknown : When we dont know the type and we still want TS type safety feature
5> void : it does not return anything! function [retutn type] 
6> never: used on function. indicates that this fuctionwill never work normally
*/

let x:any;
x=101;
x="Raushan"
x=true;
x = {name:'Raushan'} 



let managerID: number | null = null;
console.log(managerID)
managerID = 104
console.log(`The manage ID is set to ${managerID}`)

let employeeExitDate:string|null;
employeeExitDate = null; // there is no exit date set!
console.log(`the employeeExitDate is ${employeeExitDate}`)

let empContactNumber:undefined | string;
console.log(empContactNumber);//undefined -->value is not available!

//unknown
//we are supposed to do the explicit type check using the typeof
let empData : unknown;
empData='Raushan';
empData=101;

if(typeof empData === 'string'){ //explicit type check by ourself
    console.log(empData.toUpperCase())
}
else{
    if(typeof empData === 'number'){
        console.log(empData*10)
    }
}

//void : no return type

function printEmpInfo():void{
    console.log("Emp Info")
    console.log(empData)
    console.log(empContactNumber)
    console.log(employeeExitDate)
    console.log(managerID)
    
}

printEmpInfo()


//never
function throwEmpError():never{
    throw new Error("Emp data not found!")
}

function demo():never{
    while(true){
        console.log("Hi")
    }
}


