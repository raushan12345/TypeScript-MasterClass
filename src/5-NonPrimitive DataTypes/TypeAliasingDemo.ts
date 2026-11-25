type Address = {
    city: string,
    pincode: number
}


type Employee = {
    name:string,
    readonly id:number,
    salary:number,
    dept:string,
    isActive?:boolean
    address:Address
}

const empOne:Employee = {
    name:"Raushan",
    id:101,
    salary:80000,
    dept:"QA",
    address:{city:"Gaya",pincode:823001}
}

const empTwo:Employee = {
    name:"Raushan",
    id:101,
    salary:80000,
    dept:"QA",
    address:{city:"Delhi",pincode:110068}
}