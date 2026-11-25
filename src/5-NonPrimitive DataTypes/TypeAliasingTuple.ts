type Name = string;

const empData: Name[] = ["Raushan", "Raj"]

type Address = {
    city: string,
    pincode: number
}

type Employee = {
    name: string,
    readonly id: number,
    salary: number,
    dept: string,
    isActive?: boolean,
    address: Address
}

const empInfo: Employee[] = [
    {name:"Jatin",id:101,salary:5000,dept:"QA",isActive:true,address:{city:"Pune",pincode:411039}},
    {name:"Raj",id:111,salary:12000,dept:"Dev",isActive:false,address:{city:"Pune",pincode:411039}},
    {name:"Rohit",id:222,salary:9000,dept:"DevOps",address:{city:"Pune",pincode:411039}}
]