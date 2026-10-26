//use array as return type as well as parameter

console.log("Array as a parameter")
const empsId: number[] = [101,102,103]

function displayEmpData(arr:number[]){
    arr.forEach(data=>console.log(data))
} 
displayEmpData(empsId)

console.log("Array as a return type")

function getEmpIds() : number[] {
    const empsId: number[]= [501,502,503]
    return empsId
}

const x = getEmpIds()
console.log(x)