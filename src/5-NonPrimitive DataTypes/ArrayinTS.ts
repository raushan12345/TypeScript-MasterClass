// how to create an array in TS

let empName = ['Raushan','Raj','Uday']
empName.push("kajal")

empName.forEach((name)=>{
    console.log(name.toUpperCase())
})

//remove an element from an array in js/ts
let data:string | undefined = empName.pop()
console.log(data)

console.log("-".repeat(10))
empName.forEach((name)=>{
    console.log(name)
})

//how create a number, boolean array

let empIds:number[] = [101,102,103]
let empStatus:boolean[] = [true,false,true]

empIds.forEach((id)=>{
    console.log(`Emp ID ${id}`)
})

empStatus.forEach((status)=>{
    console.log(`Emp Active? ${status}`)
})