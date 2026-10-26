// Type Annotation

let empData: {
    name: string
    id:number
    isActive:boolean
    salary:number
    email?:string
}= {
    name:"Raushan",
    id:101,
    isActive:true,
    salary:70000,
    email:"PLCTEST00@GMAIL.COM"

}
console.log(empData.email?.toLowerCase())
empData.id=102
