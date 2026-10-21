let name:string = "Raushan"
let age:number =35
let company:string = "Digitas"

let isActive = true; //Type Inference
//Lookinng at value the TS can decide what should be the type of the variable!
//isActive = "Raj"

type User = {
    name:string,
    id:number
}

const user:User ={
    name: "Raushan",
    id:101,
}