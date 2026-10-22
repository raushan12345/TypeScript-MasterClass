/*
-string
-number
-boolean
-bigint
-symbol
*/

let empNmae:string = 'Raushan'; //Type annotaion
empNmae = empNmae + "Kumar"; //concatination

let empAddress = 
`
${empNmae}
Rajpur khurd,
New Delhi, Delhi
India` //type inference

console.log(empNmae)
console.log(empAddress)

//number
/*
101
-2000
34.5
*/

let empId:number = 101;
let empSalary:number = 75000;
let empAttendancePercentage = 82.5;

//boolean
//true -->1 -->sucess
//false --> -->failure

let isEmpActive:boolean= false;
if(isEmpActive){
    console.log(`Emp ${empNmae} is active in the system`)
}

else{
    console.log("Emp data not available")
}

//Big Int if i decide to store a large integer 9007199254740991
let empAccountNumber:bigint = 9007199254740995n
console.log(`emp Account Number ${empAccountNumber}`)

//symbol -->to generate unique values

let employeeId:symbol = Symbol(empId) //symbol(101)
console.log("EmployeeID", employeeId)

let employeeId2:symbol = Symbol(empId) //symbol(101)
console.log("EmployeeID", employeeId2)

//symbol is always unique!

if(employeeId === employeeId){
    console.log("Symbols are equal")
}
else{
    console.log("Symbols are not equal")
}

