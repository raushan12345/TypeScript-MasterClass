/*
let empId: string | number
empId = "Raushan"
empId = 101

empId =true
empId={id:101}
*/

//Union type as a parameter

/*
function getEmpInfo(empId:string | number){
    console.log("Finding Emp Info")
}

getEmpInfo("EMP101")
getEmpInfo(101)
getEmpInfo({id:101}) // invalid
*/

//Union as a return type

/*
function getEmpName(empId:number | string) : string | null {
    if(empId===101){
            return "Raushan"
    }
    else{
        return null //not found
    }
}

let name:string | null = getEmpName(101) //name - Raushan
let result = getEmpName("EMP102") //null

console.log(result?.toLowerCase()) //undefined
*/

//using union type in your array
let empId: (string|number|null)[] = 
["Raushan",101,"emp123",123,null]

//union type in object
//type Alias

type Employee = {name:string, id:string | number}
let empData : Employee =
{
    name:"Rauahsn",
    id:101
}

















