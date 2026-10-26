//TS

//how to create optional elements?
let empInfo2:readonly [Name:string, id?:number]=["Raushan"]
let empInfo3:readonly [string,number?]=["Raushan"]

//REST if elements...........
let empInfo4:readonly [string,number,...string[],number] = ["Raushan",101,"JS","TS","PW",101]
console.log(empInfo4[0])
console.log(empInfo4[1])
console.log(empInfo4[2])
console.log(empInfo4[3])
console.log(empInfo4[4])
console.log(empInfo4[5])

//Destructuring of tuples

let [empid,empname,skill1,skill2,skill3,no] = empInfo4

console.log(empid)
console.log(empname)
console.log(skill1)
console.log(skill2)
console.log(skill3)
console.log(no)
