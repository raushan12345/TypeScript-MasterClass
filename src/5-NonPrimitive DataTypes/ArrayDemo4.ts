//how to create a copy of an array
const data: number[]= [1,2,3,4]
const x= data

console.log(data)
console.log(x)

data.push(5)
console.log(data)
console.log(x)

//1 Use Spread operator
const y : number[] = [...x]
x.push(20)
console.log('X',x)
console.log('data',data)

console.log('y',y)








