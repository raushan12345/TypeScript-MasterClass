/*
function formatEmpID(id:string|number){
    if(typeof id=== "string"){
        console.log(id.toUpperCase())
    }
    else if(typeof id=== "number"){
        console.log(`EMP-${id}`)
    }
}

formatEmpID("emp-101")
formatEmpID(222)
*/

import test = require("@playwright/test")

/*
function printEmpName(name:string|null){
    if(name!=null && name==="string"){
        console.log(name)
    }
    else{
        console.log("name is null")
    }
}

printEmpName("Raushan")
printEmpName(null)

function printToken(token: string|undefined){
    if(token!=undefined && typeof token ==="string"){
        console.log(token)
    }
    else{
        console.log('token is undefined')
    }
}

let token1="TOKEN-123"
let token2=undefined
printToken(token1)
printToken(token2)
*/

type TestStatus = "PASS" | "FAIL" | "SKIP" //Literal type

function handleTestResult(testStatus:TestStatus){
    
    if(testStatus=== 'PASS'){  //type Narrowing...
        console.log("Test passed successfully")
    }

    else if(testStatus === 'FAIL'){
        console.log("Taking screenshot for failed test")
    }

    else if(testStatus === 'SKIP'){
        console.log('Test Skipped logging it to the report')
    }
}

handleTestResult("PASS")
handleTestResult("SKIP")
handleTestResult("FAIL")

//-----------------------------------------------------------------
type Employee = {
    name: string
}

type Admin = {
    name: string,
    permission: string[]
}

let emp: Employee = {
    name: "Jatin"
}

let admin: Admin = {
    name: "Admin",
    permission: ["READ", "WRITE"]
}

function printUserInfo(user: Employee | Admin) {

    if ("permission" in user) {
        // Admin
        console.log(user.name)
        console.log(user.permission)
    }
    else {
        // Employee
        console.log(user.name)
    }
}

//----------------------------------------------------
function printData(data:Error | Date){
    if (data instanceof Error){
        console.log("Error message is", data.message)
    }

    else if(data instanceof Date){
        console.log("Date is", data.toISOString())
    }
}

printData(new Error("Something went wrong"))
printData(new Date())
//------------------------------------------------------

function printTags(tags: string | string[]) {

    if (Array.isArray(tags)) {

        tags.forEach(tag => {
            console.log(tag.toUpperCase())
        })

    } else {
        console.log(tags)
    }
}

printTags(["smoke", "sanity", "e2e"])
printTags("ui")





