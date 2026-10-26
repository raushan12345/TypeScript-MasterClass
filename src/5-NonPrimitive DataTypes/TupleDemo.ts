//JS 
let empData: (string|number|boolean)[]= ["Raushan",101,true] //hetrogenious array type inference
let empID:  number[] = [101,102,103] //homogenious
empID[0]=1

let empInfo: [name:string, id:number, salary:number, isActive:boolean] = ["Raushan",101,75000,true] //tuple
empInfo[0]="Raj"

//Tuple has fixed structure Readonly variable
let empInfo2:readonly [name:string, id:number] = ["Raushan",101]
console.log(empInfo2[0])
console.log(empInfo2[1])
console.log(empInfo2)
console.log("Adding 10 using push")
//empInfo2.push(true)
console.log(empInfo2)

//let empInfo:[name:string,id:number] = ["Raushan",101,true]
