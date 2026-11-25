//use the type alias for function parameter and return type

type Employee = {
    name: string,
    id: number,
    emailAddress: string
}

function printEmployeeInfo(emp: Employee) {
    console.log("Employee Info");
    console.log(emp.name);
    console.log(emp.id);
    console.log(emp.emailAddress);
}

function createEmployee(): Employee {
    const x: Employee = {
        name: "ajinkya",
        id: 101,
        emailAddress: "aj@gmail.com"
    }

    return x;
}

console.log(createEmployee());