function printEmpInfo(empData: {name: string, id: number, salary: number}) {
    console.log(empData.name)
    console.log(empData.id)
    console.log(empData.salary)
}

const e: {
    name: string,
    id: number,
    salary: string | number
} = {
    name: "Raushan",
    id: 101,
    salary: '75000'
}

//printEmpInfo(e);

function createEmp():{
    name:string
    id:number
    salary:number
    isActive:boolean} {

        const e = {
            name:"Raj",
            id:101,
            salary:10000,
            isActive:true
        }

        return e

    }

    const newEmp = createEmp()

    console.log(newEmp.name)
    console.log(newEmp.id)
    console.log(newEmp.salary)
    console.log(newEmp.isActive)