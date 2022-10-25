let x = 1
let y = 2
let z = -3

//////////////////////////////////////////////////////////

function conversion(dollars){
    tenge = dollars * 473
    console.log(tenge + "\n\n")
    // console.log("\n")
}
console.log("Converting 1$ to tenge:")
conversion(x)
console.log("Converting 2$ to tenge:")
conversion(y)

///////////////////////////////////////////////////////////

function positivity(number){
    if(number >= 0){
        console.log("the number is positive\n\n")
    } else {
        console.log("the number is negative\n\n")
    }
}
console.log("Checking number 1 for positivity:")
positivity(x)
console.log("Checking number 2 for positivity:")
positivity(y)
console.log("Checking number -3 for positivity:")
positivity(z)

/////////////////////////////////////////////////////////////

function parity(number){
    result = number % 2
    if(result == 0){
        console.log("the number is even\n\n")
    } else {
        console.log("the number is odd\n\n")
    }
}
console.log("Checking number 1 for parity:")
parity(x)
console.log("Checking number 2 for parity:")
parity(y)
console.log("Checking number -3 for parity:")
parity(z)