//Array of objects

const name:string[] = ['Raushan','Raj','Rohit']
const id:number[] = [10,20,30]
const status:boolean[] = [true,false,true]

const empDataArray:{name:string,id:number,salary:number}[]=
[
    {name:'Raushan',id:10,salary:10000},
    {name:'Raj',id:20,salary:20000},
    {name:'Rohit',id:30,salary:30000}
]

empDataArray.push({name:"Ram",id:111,salary:60000})
empDataArray.forEach(empData => console.log(empData))

const result = empDataArray.filter((data) => data.salary > 50000)
result.forEach(empData => console.log(empData))
