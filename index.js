console.log("hello from node js")
console.log(2 == 4)

function add(a, b) {
    return a + b
}

console.log(add(1, 4))




//global variable 
global.companyName = "Ashish"

console.log(companyName)


function print() {
    console.log(companyName)
}

print()


console.log(process.USER)


setInterval(() => console.log("hello"), 1000)

    ..

console.log(__filename)

console.log(__dirname)

const add = require("./app")